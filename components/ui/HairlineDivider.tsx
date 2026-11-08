import React from "react";

export const HairlineDivider = ({
  className = "",
  orientation = "horizontal",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) => {
  if (orientation === "vertical") {
    return <div className={`w-[1px] bg-sal-forest/10 self-stretch ${className}`} />;
  }
  return <div className={`h-[1px] w-full bg-sal-forest/10 my-4 ${className}`} />;
};

