import DeviceControlCard from "./DeviceControlCard";
import FeederBowlIcon from "./icons/FeederBowlIcon";

const OPTIONS = [
  { id: "porcion_chica", label: "Porción chica" },
  { id: "porcion_mediana", label: "Porción mediana" },
  { id: "porcion_grande", label: "Porción grande" },
];

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
        <p className="mt-3 text-base text-[#8A8F98] sm:text-lg">
          Elegí el tamaño de la porción y se la damos a tu mascota{" "}
          <span className="font-medium text-[#FF8A3D]">al instante</span>.
        </p>
      </div>

      <DeviceControlCard
        title="Alimentador"
        icon={<FeederBowlIcon />}
        accent="#FF8A3D"
        options={OPTIONS}
        node="alimentador"
      />
    </section>
  );
}
