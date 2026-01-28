import React from "react";

/**
 * A full-screen blur overlay to be placed above the background but below main content.
 * Usage: Place <BlurOverlay /> as a sibling to the background layer, before main content.
 */
const BlurOverlay: React.FC = () => (
  <div
    className="fixed inset-0 z-10 pointer-events-none"
    aria-hidden="true"
    style={{
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      background: "rgba(0,0,0,0.15)",
      mixBlendMode: "normal",
    }}
  />
);

export default BlurOverlay;
