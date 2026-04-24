import { company } from "@/lib/company";

export default function Contact() {
  const items: { label: string; value: React.ReactNode }[] = [
    {
      label: "Telefon",
      value: (
        <a
          href={`tel:${company.phone.tel}`}
          className="text-[var(--primary)] underline-offset-[6px] hover:underline"
        >
          {company.phone.display}
        </a>
      ),
    },
    {
      label: "E-post",
      value: (
        <a
          href={`mailto:${company.email}`}
          className="text-[var(--primary)] underline-offset-[6px] hover:underline"
        >
          {company.email}
        </a>
      ),
    },
    {
      label: "Adress",
      value: `${company.address.street}, ${company.address.zip} ${company.address.city}`,
    },
    { label: "Öppettider", value: `Vardagar ${company.hours.weekdays}` },
    { label: "Jour", value: company.hours.emergency },
  ];

  return (
    <section
      id="kontakt"
      className="border-b border-[var(--border)] bg-[var(--bg)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-10">
          <div>
            <p className="eyebrow eyebrow-primary">// Kontakt</p>
            <h2 className="font-display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text)]">
              Hör av dig.
            </h2>
            <p className="mt-8 max-w-md text-[var(--muted)]">
              Undrar du något om ett projekt, eller vill diskutera ett nytt jobb? Mejla oss — vi svarar så snart vi kan. {company.name} finns i {company.city}.
            </p>
          </div>

          <div>
            <dl className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[110px_1fr] items-baseline gap-6 py-5 md:grid-cols-[140px_1fr]"
                >
                  <dt className="eyebrow">{item.label}</dt>
                  <dd className="font-display text-[clamp(1.2rem,2.5vw,1.75rem)] leading-tight tracking-[-0.02em] text-[var(--text)]">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
