import { PawPrint } from "lucide-react";

const LINKS = [
  { label: "Equipos", href: "#equipos" },
  { label: "Panel", href: "#alimentador" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#22262C] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <div className="flex items-center justify-center gap-1.5 font-[family-name:var(--font-heading)] text-lg text-[#F5F5F5] sm:justify-start">
            <PawPrint size={17} strokeWidth={2} className="text-[#FF8A3D]" />
            <span>
              <span className="font-light">Pet</span>
              <span className="font-bold">Link</span>
            </span>
          </div>
          <p className="mt-1.5 text-xs text-[#8A8F98]">
            Siempre cerca, incluso cuando no estás.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-[#8A8F98]">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-[#F5F5F5]">
              {l.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mt-8 text-center text-xs text-[#8A8F98]/70">
        © {new Date().getFullYear()} PetLink. Todos los derechos reservados.
      </p>
    </footer>
  );
}
