"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useState, useEffect } from "react";
import { Preload } from "@react-three/drei";
import { Perf } from "r3f-perf";
import FloatingHero from "./FloatingHero";
import WebGLFallback from "./WebGLFallback";

function Loader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function Scene3D() {
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setWebglSupported(false);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (!webglSupported) {
    return <WebGLFallback />;
  }

  return (
    <div className="absolute inset-0">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          {process.env.NODE_ENV === "development" && (
            <Perf position="top-left" />
          )}
          <FloatingHero />
          <Preload all />
        </Canvas>
      </Suspense>
    </div>
  );
}
