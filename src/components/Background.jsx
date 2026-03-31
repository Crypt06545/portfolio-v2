import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* FIXED BACKGROUND:
          Matches the StarsBackground component EXACTLY.
          Color 1: #262626 (Dark Charcoal)
          Color 2: #000 (Pure Black)
      */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at bottom, #262626 0%, #000 100%)",
        }}
      />

      {/* Scrollable Content */}
      <div className="relative z-10 min-h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default Background;
