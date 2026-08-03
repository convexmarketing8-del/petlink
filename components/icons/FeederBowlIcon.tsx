"use client";

import { useId } from "react";

export default function FeederBowlIcon({ size = 28 }: { size?: number }) {
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
        <linearGradient id={`${id}-rim`} x1="16" y1="7.5" x2="16" y2="16.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FFC08A" />
          <stop offset="1" stopColor="#FF8A3D" />
        </linearGradient>
        <linearGradient id={`${id}-body`} x1="16" y1="12" x2="16" y2="24.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FF8A3D" />
          <stop offset="1" stopColor="#C4591C" />
        </linearGradient>
        <linearGradient id={`${id}-well`} x1="16" y1="9" x2="16" y2="15.5" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#8A4318" />
          <stop offset="1" stopColor="#5A2A0C" />
        </linearGradient>
      </defs>

      <ellipse cx="16" cy="25.5" rx="9.5" ry="1.4" fill="#000000" opacity="0.22" />

      <path
        d="M4.5 12C4.5 19.5 9.5 24.5 16 24.5C22.5 24.5 27.5 19.5 27.5 12Z"
        fill={`url(#${id}-body)`}
      />

      <ellipse cx="16" cy="12" rx="11.5" ry="4.5" fill={`url(#${id}-rim)`} />
      <ellipse cx="16" cy="12.3" rx="8.3" ry="3.1" fill={`url(#${id}-well)`} />

      <circle cx="12.3" cy="11.7" r="1.15" fill="#F6C68C" />
      <circle cx="16" cy="10.6" r="1.35" fill="#FBD8AC" />
      <circle cx="19.1" cy="12" r="1.05" fill="#EAA968" />
      <circle cx="14.1" cy="13.3" r="1" fill="#F2B979" />
      <circle cx="17.7" cy="13.2" r="0.9" fill="#EAA968" />
    </svg>
  );
}
