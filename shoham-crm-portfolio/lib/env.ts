import { z } from "zod";

const envSchema = z.object({
  BASE44_LEAD_ENDPOINT: z.string().url().optional(),
  NEXT_PUBLIC_WHATSAPP_URL: z.string().url(),
  NEXT_PUBLIC_SITE_URL: z.string().url(),
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
});

export const env = envSchema.parse({
  BASE44_LEAD_ENDPOINT: process.env.BASE44_LEAD_ENDPOINT,
  NEXT_PUBLIC_WHATSAPP_URL: process.env.NEXT_PUBLIC_WHATSAPP_URL,
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NODE_ENV: process.env.NODE_ENV,
});

export function getEnvSafe() {
  try {
    return env;
  } catch (error) {
    console.error("Environment validation failed:", error);
    return null;
  }
}
