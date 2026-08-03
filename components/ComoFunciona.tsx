const STEPS = [
  {
    number: "1",
    title: "Elegís la opción",
    description:
      "Desde tu celular, tocás el botón de la porción o el tiempo que quieras.",
  },
  {
    number: "2",
    title: "Se envía al instante",
    description: "Tu pedido llega enseguida, sin que tengas que hacer nada más.",
  },
  {
    number: "3",
    title: "Tu mascota recibe su premio",
    description: "En segundos, tu mascota ya tiene su comida o agua lista.",
  },
];

export default function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      className="scroll-mt-24 flex flex-col items-center px-5 py-10 pb-20 sm:px-8 sm:py-14 sm:pb-24"
    >
      <div className="mb-12 max-w-md text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-[#F5F5F5] sm:text-4xl">
          Cómo funciona
        </h2>
        <p className="mt-3 text-[#8A8F98]">
          Así de simple, en tres pasos.
        </p>
      </div>

      <div className="grid w-full max-w-4xl gap-6 sm:grid-cols-3">
        {STEPS.map((step) => (
          <div
            key={step.number}
            className="rounded-3xl border border-[#22262C] bg-[#161A1F] p-6 text-center sm:text-left"
          >
            <span className="font-[family-name:var(--font-heading)] mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#22262C] text-base font-semibold text-[#F5F5F5] sm:mx-0">
              {step.number}
            </span>
            <h3 className="mt-4 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F5F5]">
              {step.title}
            </h3>
            <p className="mt-2 text-sm text-[#8A8F98]">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
