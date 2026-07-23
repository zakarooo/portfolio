"use client";

export default function WebGLFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-light to-charcoal" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(0,102,255,0.4) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-10 animate-float"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
