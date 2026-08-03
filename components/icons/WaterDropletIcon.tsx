"use client";

import { useId } from "react";

export default function WaterDropletIcon({ size = 28 }: { size?: number }) {
  const id = useId();

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${id}-drop`} x1="9" y1="4" x2="24" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#A6EBFF" />
          <stop offset="0.55" stopColor="#3DC9FF" />
          <stop offset="1" stopColor="#0E86C4" />
        </linearGradient>
      </defs>

      <ellipse cx="16" cy="28.3" rx="7" ry="1.3" fill="#000000" opacity="0.16" />

      <path
        d="M16 3C16 3 6 15.3 6 21.5C6 27 10.5 29.5 16 29.5C21.5 29.5 26 27 26 21.5C26 15.3 16 3 16 3Z"
        fill={`url(#${id}-drop)`}
      />

      <ellipse
        cx="12.3"
        cy="16.8"
        rx="2.1"
        ry="3.5"
        fill="#FFFFFF"
        opacity="0.45"
        transform="rotate(-18 12.3 16.8)"
      />
      <ellipse cx="19.6" cy="23.3" rx="1.1" ry="1.6" fill="#FFFFFF" opacity="0.2" />
    </svg>
  );
}
