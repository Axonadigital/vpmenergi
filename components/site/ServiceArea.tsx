import { company } from "@/lib/company";

export default function ServiceArea() {
  return (
    <section
      id="omrade"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center">
            <p className="eyebrow eyebrow-primary">// Område</p>
            <h2 className="font-display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text)]">
              Verksamma i hela Jämtland.
            </h2>
            <p className="mt-8 max-w-md text-[var(--muted)]">
              {company.name} utgår från Östersund och åtar sig uppdrag i hela regionen. Vi arbetar med
              både privatpersoner, bostadsrättsföreningar och företag — från enskilda serviceuppdrag
              till större installationer.
            </p>

            <ul className="mt-10 flex flex-wrap gap-3">
              {company.serviceArea.map((city) => (
                <li
                  key={city}
                  className="border border-[var(--border)] px-4 py-2 text-sm font-medium text-[var(--text)]"
                >
                  {city}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-square w-full overflow-hidden border border-[var(--border)] grayscale-[0.15] md:aspect-auto md:h-full md:min-h-[480px]">
            <iframe
              title="Karta över Jämtland med Östersund i centrum"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324376.6550476553!2d14.400568942452952!3d63.179049302888786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x466f9b0b6e4c9e6d%3A0x0!2s%C3%96stersund%2C%20Sweden!5e0!3m2!1sen!2sus!4v1776092453270!5m2!1sen!2sus"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
