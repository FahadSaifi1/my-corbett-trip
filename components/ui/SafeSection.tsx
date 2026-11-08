import React from "react";

interface SafeSectionProps<T> {
  data: T[] | null | undefined;
  children: (items: T[]) => React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * HONESTY COMPONENT WRAPPER:
 * Automatically hides sections (such as reviews, partner hotels, team bios, awards)
 * when their corresponding content array is empty or undefined.
 */
export function SafeSection<T>({ data, children, fallback = null }: SafeSectionProps<T>) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return <>{fallback}</>;
  }
  return <>{children(data)}</>;
}

