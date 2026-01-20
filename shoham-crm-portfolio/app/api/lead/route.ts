import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rate-limit";

const leadSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  budgetRange: z.string().optional(),
  honeypot: z.string().optional(), // Anti-spam honeypot field
});

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown";
    
    // Check rate limit
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: "Too many requests. Please try again later.",
          retryAfter: rateLimitResult.retryAfter,
        },
        { status: 429 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Honeypot check - if filled, it's a bot
    if (body.honeypot) {
      // Silently reject bots
      return NextResponse.json(
        { success: true, message: "Thank you for your inquiry!" },
        { status: 200 }
      );
    }

    // Validate payload
    const validatedData = leadSchema.parse(body);

    // Check if Base44 endpoint is configured
    const base44Endpoint = process.env.BASE44_LEAD_ENDPOINT;
    
    if (!base44Endpoint) {
      // If not configured, just log and return success
      console.log("Lead submission (Base44 not configured):", validatedData);
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your inquiry! We'll get back to you soon.",
        },
        { status: 200 }
      );
    }

    // Prepare payload for Base44
    const base44Payload = {
      fullName: validatedData.fullName,
      email: validatedData.email,
      phone: validatedData.phone || "",
      company: validatedData.company || "",
      message: validatedData.message,
      budgetRange: validatedData.budgetRange || "",
      source: "Portfolio Website",
      timestamp: new Date().toISOString(),
    };

    // Forward to Base44 with timeout and retry
    const submitToBase44 = async (retryCount = 0): Promise<Response> => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      try {
        const response = await fetch(base44Endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(base44Payload),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        return response;
      } catch (error) {
        clearTimeout(timeoutId);
        
        if (retryCount < 1) {
          // Retry once
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return submitToBase44(retryCount + 1);
        }
        
        throw error;
      }
    };

    try {
      const base44Response = await submitToBase44();
      
      if (!base44Response.ok) {
        console.error("Base44 submission failed:", base44Response.status);
        // Still return success to user
        return NextResponse.json(
          {
            success: true,
            message: "Thank you for your inquiry! We'll get back to you soon.",
          },
          { status: 200 }
        );
      }

      const base44Data = await base44Response.json();
      
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
          data: base44Data,
        },
        { status: 200 }
      );
    } catch (base44Error) {
      console.error("Base44 integration error:", base44Error);
      
      // Still return success to user - don't expose internal errors
      return NextResponse.json(
        {
          success: true,
          message: "Thank you for your inquiry! We'll get back to you soon.",
        },
        { status: 200 }
      );
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: "Please check your form inputs.",
          details: error.errors.map((e) => e.message),
        },
        { status: 400 }
      );
    }

    console.error("Lead submission error:", error);
    
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again or contact us via WhatsApp.",
      },
      { status: 500 }
    );
  }
}
