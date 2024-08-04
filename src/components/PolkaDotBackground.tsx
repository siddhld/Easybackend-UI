import React from "react";

interface PolkaDotBackgroundProps {
  dotColor?: string;
  backgroundColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  children?: React.ReactNode;
}

const PolkaDotBackground: React.FC<PolkaDotBackgroundProps> = ({
  dotColor = "rgba(0, 0, 0, 0.1)",
  backgroundColor = "white",
  dotSize = 2,
  dotSpacing = 20,
  children,
}) => {
  const backgroundStyle = {
    backgroundColor: backgroundColor,
    backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
    backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
    width: "100%",
    height: "100%",
    position: "fixed" as "fixed",
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <>
      <div style={backgroundStyle} />
      {children}
    </>
  );
};

export default PolkaDotBackground;
