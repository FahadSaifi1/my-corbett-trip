import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ochre" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button = ({
  variant = "primary",
  size = "md",
  href,
  isExternal,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none text-center";

  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs tracking-wider uppercase",
    md: "px-5 py-2.5 text-sm tracking-wide",
    lg: "px-7 py-3.5 text-base tracking-wide shadow-sm",
  }[size];

  const variantClasses = {
    primary:
      "bg-sal-forest text-cream hover:bg-sal-forest/90 active:scale-[0.99] border border-sal-forest",
    secondary:
      "bg-bark text-cream hover:bg-bark/90 active:scale-[0.99] border border-bark",
    ochre:
      "bg-tiger-ochre text-white hover:bg-[#b5671f] active:scale-[0.99] border border-tiger-ochre",
    outline:
      "bg-transparent text-sal-forest border border-sal-forest/30 hover:border-sal-forest hover:bg-sal-forest/5 active:scale-[0.99]",
    ghost:
      "bg-transparent text-sal-forest hover:bg-sal-forest/5 active:scale-[0.99]",
  }[variant];

  const combinedClasses = `${baseClasses} ${sizeClasses} ${variantClasses} ${className}`;

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

