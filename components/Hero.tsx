import { PawPrint } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="flex flex-col items-center px-5 pt-24 pb-4 text-center sm:px-8 sm:pt-28 sm:pb-6">
      <Reveal className="flex flex-col items-center">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <PawPrint
            size={40}
            strokeWidth={1.75}
            className="shrink-0 text-[#FF8A3D] sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
          <h1 className="font-[family-name:var(--font-heading)] text-5xl tracking-tight text-[#F5F5F5] sm:text-6xl md:text-7xl">
            <span className="font-light">Pet</span>
            <span className="font-bold">Link</span>
          </h1>
        </div>
        <p className="mt-4 max-w-md text-balance text-base text-[#8A8F98] sm:text-lg">
          Siempre cerca, incluso cuando no estás
        </p>
      </Reveal>
    </section>
  );
}
