import React from "react";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen bg-black w-full relative overflow-hidden">
      {/* Radial Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: `
        radial-gradient(
          circle at center,
          rgba(255, 255, 255, 0.08) 0%,
          rgba(255, 255, 255, 0.04) 20%,
          rgba(0, 0, 0, 0.0) 60%
        )
      `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
