"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Check for reduced motion preference
  const prefersReducedMotion = mounted && typeof window !== "undefined"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  if (!mounted || prefersReducedMotion) {
    return (
      <div 
        className="fixed inset-0 -z-[1]"
        style={{ background: "#070A0F" }}
      />
    );
  }

  return (
    <div className="fixed inset-0 -z-[1] overflow-hidden">
      {/* Dark base background */}
      <div className="absolute inset-0" style={{ background: "#070A0F" }} />

      {/* Orb 1: Mint to Teal */}
      <motion.div
        className="absolute rounded-full blur-[160px]"
        style={{
          width: "800px",
          height: "800px",
          background: "radial-gradient(circle, #50FDE4, #13D8BC)",
          opacity: 0.45,
          top: "20%",
          left: "10%",
        }}
        animate={{
          x: [-100, 120, -80],
          y: [-50, 80, -40],
          scale: [1, 1.15, 1],
          rotate: [0, 20, -10],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2: Periwinkle to Indigo */}
      <motion.div
        className="absolute rounded-full blur-[160px]"
        style={{
          width: "900px",
          height: "900px",
          background: "radial-gradient(circle, #746BFF, #684DFF)",
          opacity: 0.4,
          top: "60%",
          right: "15%",
        }}
        animate={{
          x: [80, -120, 60],
          y: [-60, 100, -30],
          scale: [1, 1.2, 1],
          rotate: [0, -25, 15],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Orb 3: Deep Violet to Dark Purple */}
      <motion.div
        className="absolute rounded-full blur-[160px]"
        style={{
          width: "750px",
          height: "750px",
          background: "radial-gradient(circle, #461D88, #1B0F2E)",
          opacity: 0.5,
          bottom: "15%",
          left: "50%",
        }}
        animate={{
          x: [-60, 90, -70],
          y: [40, -80, 50],
          scale: [1, 1.1, 1],
          rotate: [0, 30, -20],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Animated Noise Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
          mixBlendMode: "overlay",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}