import DeviceControlCard from "./DeviceControlCard";

const OPTIONS = [
  { id: "10s", label: "10 segundos" },
  { id: "20s", label: "20 segundos" },
  { id: "30s", label: "30 segundos" },
];

function DropletIcon() {
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
      <path d="M12 2.5s6.5 7.1 6.5 11.7a6.5 6.5 0 1 1-13 0C5.5 9.6 12 2.5 12 2.5Z" />
    </svg>
  );
}

export default function BebederoSection() {
  return (
    <section
      id="bebedero"
      className="scroll-mt-24 flex flex-col items-center px-5 py-10 sm:px-8 sm:py-14"
    >
      <div className="mb-10 max-w-md text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#F5F5F5] sm:text-4xl">
          Bebedero automático
        </h2>
        <p className="mt-3 text-[#8A8F98]">
          Elegí cuánto tiempo se sirve el agua y lo hacemos al instante.
        </p>
      </div>

      <DeviceControlCard
        title="Bebedero"
        icon={<DropletIcon />}
        accent="#3DC9FF"
        options={OPTIONS}
        node="bebedero"
      />
    </section>
  );
}
