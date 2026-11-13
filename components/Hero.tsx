import { ArrowDown, PawPrint } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-5 pt-28 pb-12 text-center sm:px-8 sm:pt-36 sm:pb-16">
      <Reveal className="flex flex-col items-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-[#22262C] bg-[#161A1F]/80 px-3.5 py-1.5 text-xs font-medium text-[#8A8F98] backdrop-blur">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4ADE80]" />
          </span>
          Control remoto en tiempo real
        </span>

        <div className="mt-7 flex items-center gap-3 sm:gap-4">
          <PawPrint
            size={44}
            strokeWidth={1.75}
            className="shrink-0 text-[#FF8A3D] drop-shadow-[0_0_18px_rgba(255,138,61,0.55)] sm:h-14 sm:w-14 md:h-16 md:w-16"
          />
          <h1 className="font-[family-name:var(--font-heading)] text-6xl tracking-tight text-[#F5F5F5] sm:text-7xl md:text-8xl">
            <span className="font-light">Pet</span>
            <span className="bg-gradient-to-r from-[#FF8A3D] to-[#3DC9FF] bg-clip-text font-bold text-transparent">
              Link
            </span>
          </h1>
        </div>

        <p className="mt-5 max-w-md text-balance text-lg text-[#B4B8BF] sm:text-xl">
          Siempre cerca, incluso cuando no estás
        </p>
        <p className="mt-3 max-w-lg text-balance text-sm text-[#8A8F98] sm:text-base">
          Alimentá y dale agua a tu mascota desde el celular, estés donde estés.
        </p>

        <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:w-auto sm:max-w-none sm:flex-row">
          <a
            href="#alimentador"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF8A3D] px-7 py-3.5 text-sm font-semibold text-[#0D0F12] shadow-[0_10px_30px_-10px_rgba(255,138,61,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(255,138,61,1)] active:scale-95"
          >
            Controlar ahora
          </a>
          <a
            href="#equipos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#2C3138] bg-[#161A1F]/60 px-7 py-3.5 text-sm font-semibold text-[#F5F5F5] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8A8F98]/60 active:scale-95"
          >
            Conocé los equipos
            <ArrowDown size={15} />
          </a>
        </div>
      </Reveal>
    </section>
  );
}
