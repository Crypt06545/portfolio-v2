import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* FIXED BACKGROUND:
          Matches the StarsBackground component EXACTLY.
          Color 1: #262626 (Dark Charcoal)
          Color 2: #000 (Pure Black)
      */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, #262626 0%, #000 100%)",
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default Background;
