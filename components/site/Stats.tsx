const stats = [
  { value: "Sedan 2012", label: "Grundat i Jämtland" },
  { value: "Auktoriserad", label: "Utbildad och certifierad personal" },
  { value: "Jämtland", label: "Lokal förankring i hela regionen" },
  { value: "Jour", label: "Beredskap för akuta uppdrag" },
];

export default function Stats() {
  return (
    <section
      id="darfor"
      className="border-b border-[var(--border)] bg-[var(--primary)] text-[var(--primary-ink)]"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-12 md:py-40">
        <p
          className="text-[12px] font-medium tracking-[0.2em] uppercase"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Kort om oss
        </p>
        <h2 className="mt-6 max-w-[22ch] text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.1] tracking-[-0.02em]">
          Lokal VVS-firma med lång erfarenhet.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <div
                className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-tight tracking-[-0.01em]"
              >
                {s.value}
              </div>
              <div
                className="mt-4 text-[12px] font-medium tracking-[0.2em] uppercase"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
