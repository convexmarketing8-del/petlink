"use client";

import { PawPrint } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Alimentador", href: "#alimentador" },
  { label: "Bebedero", href: "#bebedero" },
  { label: "Cómo funciona", href: "#como-funciona" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#22262C]/60 bg-[#0D0F12]/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-1.5 font-[family-name:var(--font-heading)] text-lg tracking-tight text-[#F5F5F5]"
        >
          <PawPrint size={17} strokeWidth={2} className="shrink-0 text-[#FF8A3D]" />
          <span>
            <span className="font-light">Pet</span>
            <span className="font-bold">Link</span>
          </span>
        </button>

        <div ref={menuRef} className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-haspopup="true"
            className="flex items-center gap-2 rounded-full border border-[#22262C] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition-colors duration-200 hover:border-[#8A8F98]/50"
          >
            Menú
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>

          <div
            className={`absolute right-0 mt-2 w-52 origin-top-right rounded-2xl border border-[#22262C] bg-[#161A1F] p-1.5 shadow-xl shadow-black/40 transition-all duration-200 ${
              open
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0"
            }`}
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3.5 py-2.5 text-sm font-medium text-[#F5F5F5] transition-colors duration-150 hover:bg-[#22262C]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
