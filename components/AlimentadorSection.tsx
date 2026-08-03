import DeviceControlCard from "./DeviceControlCard";

const OPTIONS = [
  { id: "porcion_chica", label: "Porción chica" },
  { id: "porcion_mediana", label: "Porción mediana" },
  { id: "porcion_grande", label: "Porción grande" },
];

function FeederIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 11h18" />
      <path d="M4 11a8 8 0 0 0 16 0" />
      <path d="M4 11c0-1.5 1-3 2.5-3.5" />
      <path d="M12 3v3" />
      <path d="M8 4.5 9.5 6" />
      <path d="M16 4.5 14.5 6" />
    </svg>
  );
}

export default function AlimentadorSection() {
  return (
    <section
      id="alimentador"
      className="scroll-mt-24 flex flex-col items-center px-5 py-10 sm:px-8 sm:py-14"
    >
      <div className="mb-10 max-w-md text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#F5F5F5] sm:text-4xl">
          Alimentador automático
        </h2>
        <p className="mt-3 text-[#8A8F98]">
          Elegí el tamaño de la porción y se la damos a tu mascota al
          instante.
        </p>
      </div>

      <DeviceControlCard
        title="Alimentador"
        icon={<FeederIcon />}
        accent="#FF8A3D"
        options={OPTIONS}
        node="alimentador"
      />
    </section>
  );
}
