"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useState, useRef } from "react";
import * as THREE from "three";

function AnimatedOrb() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Animate rotation
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.y += delta * 0.5;
  });

  return (
    <mesh ref={meshRef} scale={2.5}>
      <sphereGeometry args={[1.5, 64, 64]} />
      <meshStandardMaterial
        metalness={0.6}
        roughness={0.2}
        emissive={new THREE.Color("#024D41")}
        emissiveIntensity={0.3}
        color={new THREE.Color("#13D8BC")}
      />
    </mesh>
  );
}

function WebGLFallback() {
  return (
    <div 
      className="absolute inset-0 -z-10 pointer-events-none opacity-40"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(80, 253, 228, 0.3) 0%, rgba(19, 216, 188, 0.2) 30%, transparent 70%)",
        filter: "blur(60px)",
        transform: "translate(0, 0)",
        animation: "blob-float 20s ease-in-out infinite",
      }}
    />
  );
}

export function LiquidOrb() {
  const [mounted, setMounted] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    setMounted(true);

    // Check for WebGL support
    if (typeof window !== "undefined") {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebglSupported(!!gl);
    }

    // Check for reduced motion preference
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setShouldRender(!mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => {
        setShouldRender(!e.matches);
      };

      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  if (!mounted || !shouldRender) {
    return null;
  }

  // Fallback to CSS blob if WebGL is not supported
  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div className="absolute inset-0 -z-10 pointer-events-none" style={{ opacity: 0.4 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<WebGLFallback />}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#50FDE4" />
          <pointLight position={[-5, -5, -5]} intensity={0.5} color="#746BFF" />
          <pointLight position={[5, -5, 5]} intensity={0.3} color="#13D8BC" />
          <AnimatedOrb />
        </Suspense>
      </Canvas>
    </div>
  );
}