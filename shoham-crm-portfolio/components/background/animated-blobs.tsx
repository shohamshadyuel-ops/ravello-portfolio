"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBlobs() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 0.05,
        y: (e.clientY / window.innerHeight - 0.5) * 0.05,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Check for reduced motion preference
  const prefersReducedMotion = mounted && typeof window !== "undefined" 
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Large blob 1 - Arctic Mint */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, rgba(80, 253, 228, 0.4), rgba(80, 253, 228, 0) 70%)",
        }}
      />

      {/* Large blob 2 - Periwinkle */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        style={{
          background: "radial-gradient(circle, rgba(116, 107, 255, 0.4), rgba(116, 107, 255, 0) 70%)",
        }}
      />

      {/* Medium blob 3 - Lagoon Glow */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        animate={{
          x: [0, 80, 0],
          y: [0, -60, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          background: "radial-gradient(circle, rgba(19, 216, 188, 0.4), rgba(19, 216, 188, 0) 70%)",
        }}
      />

      {/* Small accent blob - Electric Indigo */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full blur-2xl opacity-15"
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background: "radial-gradient(circle, rgba(104, 77, 255, 0.5), rgba(104, 77, 255, 0) 70%)",
        }}
      />
    </div>
  );
}