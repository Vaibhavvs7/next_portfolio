"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import AnimatedShape from "./AnimatedShape";

export default function About3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="w-full h-full pointer-events-none group-hover:pointer-events-auto">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <AnimatedShape />
      </Suspense>
    </Canvas>
  );
}
