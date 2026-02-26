import React from "react";

const Background = ({ children }) => {
  return (
    <>
      <div
        className="fixed inset-0 -z-10 pointer-events-none bg-black"
        aria-hidden="true"
        style={{
          transform: "translate3d(0, 0, 0)",
          WebkitTransform: "translate3d(0, 0, 0)", // Safari loves the prefix
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.08) 0%,
                rgba(255, 255, 255, 0.04) 20%,
                rgba(0, 0, 0, 0) 60%
              )
            `,
          }}
        />
      </div>

      <div className="relative min-h-screen">{children}</div>
    </>
  );
};

export default Background;
