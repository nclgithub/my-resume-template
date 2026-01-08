"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";

interface TooltipButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tooltip: string;
}

export default function TooltipButton({ children, tooltip, className = "", ...buttonProps }: TooltipButtonProps) {
  return (
    <div className="relative group">
      <button className={className} {...buttonProps}>
        {children}
      </button>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-200 bg-gray-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap">
        {tooltip}
      </div>
    </div>
  );
}
