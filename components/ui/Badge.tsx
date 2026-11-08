import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "forest" | "ochre" | "mist" | "outline";
  className?: string;
}

export const Badge = ({
  children,
  variant = "mist",
  className = "",
}: BadgeProps) => {
  const variantStyles = {
    forest: "bg-sal-forest/10 text-sal-forest border border-sal-forest/20",
    ochre: "bg-tiger-ochre/15 text-[#9B5614] border border-tiger-ochre/30",
    mist: "bg-mist/30 text-sal-forest border border-mist/50",
    outline: "bg-transparent text-sal-forest border border-sal-forest/30",
  }[variant];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium tracking-wider uppercase ${variantStyles} ${className}`}
    >
      {children}
    </span>
  );
};

