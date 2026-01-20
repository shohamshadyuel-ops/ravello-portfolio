"use client";

import { useEffect, useState } from "react";

export function NexioBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base deep black background */}
      <div className="absolute inset-0 bg-[#060607]" />
      
      {/* Animated gradient blobs - magenta/pink/purple */}
      <div className="absolute inset-0">
        {/* Blob 1 - Top left - Magenta */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-30 animate-blob-float-1"
          style={{
            background: "radial-gradient(circle, #FF00FF 0%, #FF1493 50%, transparent 70%)",
            top: "-400px",
            left: "-400px",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        
        {/* Blob 2 - Top right - Pink */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full blur-[120px] opacity-25 animate-blob-float-2"
          style={{
            background: "radial-gradient(circle, #FF69B4 0%, #FF1493 50%, transparent 70%)",
            top: "-300px",
            right: "-300px",
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
          }}
        />
        
        {/* Blob 3 - Bottom center - Purple */}
        <div
          className="absolute w-[900px] h-[900px] rounded-full blur-[140px] opacity-20 animate-blob-float-3"
          style={{
            background: "radial-gradient(circle, #8B00FF 0%, #9370DB 50%, transparent 70%)",
            bottom: "-400px",
            left: "50%",
            transform: `translateX(calc(-50% + ${mousePosition.x * 0.01}px))`,
          }}
        />
        
        {/* Blob 4 - Center right - Magenta-Purple blend */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 animate-blob-float-4"
          style={{
            background: "radial-gradient(circle, #BA55D3 0%, #DA70D6 50%, transparent 70%)",
            top: "40%",
            right: "10%",
            transform: `translate(${-mousePosition.x * 0.01}px, ${-mousePosition.y * 0.01}px)`,
          }}
        />
      </div>
      
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      
      {/* Subtle film grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />
    </div>
  );
}
