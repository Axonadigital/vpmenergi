import Image from "next/image";

const partners = [
  {
    name: "Jämtkraft",
    tagline: "Energileverantör i Jämtland",
    logo: "/images/jämtkraft-transparant.png",
  },
  {
    name: "HSB",
    tagline: "Bostadsrättsförening",
    logo: "/images/projects/HSB.png",
  },
] as const;

export default function Projects() {
  return (
    <section
      id="projekt"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-primary">// Samarbetspartners</p>
            <h2 className="font-display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text)]">
              Vi jobbar med de bästa i regionen.
            </h2>
            <p className="mt-8 max-w-md text-[var(--muted)]">
              Våra samarbetspartners är etablerade aktörer i Jämtland som vi jobbar med löpande — från
              energileverantörer till bostadsrättsföreningar.
            </p>
          </div>

          <ul className="flex flex-col items-center justify-center gap-16 sm:flex-row sm:gap-20 md:col-span-7">
            {partners.map((partner) => (
              <li
                key={partner.name}
                className="flex flex-col items-center gap-5"
              >
                <div className="relative h-24 w-56 md:h-28 md:w-64">
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logotyp`}
                    fill
                    sizes="(min-width: 768px) 260px, 220px"
                    className="object-contain"
                  />
                </div>
                <span className="eyebrow text-center">{partner.tagline}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
