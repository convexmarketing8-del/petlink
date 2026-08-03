export function TapIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="4" y="4" width="15" height="15" rx="5" />
      <circle cx="11.5" cy="11.5" r="2.2" fill="currentColor" stroke="none" />
      <path d="M17 5.2c1.4 1 2.3 2.6 2.3 4.4" strokeWidth="1.6" />
      <path d="M19.1 3.3c2.1 1.5 3.5 3.9 3.5 6.6" strokeWidth="1.6" />
    </svg>
  );
}

export function SignalIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <circle cx="12" cy="15" r="1.6" fill="currentColor" stroke="none" />
      <path d="M8.3 12.3a5.2 5.2 0 0 1 7.4 0" />
      <path d="M5.5 9.4a9.2 9.2 0 0 1 13 0" />
    </svg>
  );
}

export function HeartIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 20.2s-7.4-4.5-9.8-9.2C.8 7.7 2.6 4.5 5.9 4a4.9 4.9 0 0 1 6.1 2.5A4.9 4.9 0 0 1 18.1 4c3.3.5 5.1 3.7 3.7 7-2.4 4.7-9.8 9.2-9.8 9.2Z" />
    </svg>
  );
}
