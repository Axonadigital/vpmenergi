"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Flame,
  Thermometer,
  Search,
  Droplet,
  Wrench,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import { company } from "@/lib/company";
import ServiceModal from "./ServiceModal";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Thermometer,
  Search,
  Droplet,
  Wrench,
};

type Service = (typeof company.services)[number];

export default function Services() {
  const [active, setActive] = useState<Service | null>(null);
  const ActiveIcon = active ? iconMap[active.icon] : null;

  return (
    <section
      id="tjanster"
      className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] py-28 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-[18%] left-[-4%] hidden w-[30%] opacity-20 md:block"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src="/images/vvs rör.jpg"
            alt=""
            fill
            sizes="30vw"
            className="object-cover"
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] left-[26%] hidden w-[14%] opacity-15 md:block"
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src="/images/vvs.jpg"
            alt=""
            fill
            sizes="14vw"
            className="object-cover"
          />
        </div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/50 to-[var(--bg)] md:via-transparent"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <p className="eyebrow eyebrow-primary">// Tjänster</p>
            <h2 className="font-display mt-6 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em] text-[var(--text)]">
              Våra tjänster.
            </h2>
            <p className="mt-8 max-w-md text-[var(--muted)]">
              Vi erbjuder kompletta VVS-tjänster för privatpersoner, bostadsrättsföreningar och
              företag i Jämtland — från installation och service till jour och underhåll.
            </p>
            <p className="mt-6 max-w-md text-sm text-[var(--muted)]">
              Klicka på en tjänst för mer information.
            </p>
          </div>

          <ul className="md:col-span-7">
            {company.services.map((service, i) => {
              const Icon = iconMap[service.icon];
              return (
                <li
                  key={service.title}
                  className={
                    i === 0
                      ? "border-y border-[var(--border)]"
                      : "border-b border-[var(--border)]"
                  }
                >
                  <button
                    type="button"
                    onClick={() => setActive(service)}
                    aria-label={`Läs mer om ${service.title}`}
                    className="group relative flex w-full items-center justify-between gap-6 py-7 pl-6 text-left md:py-8"
                  >
                    <span className="pointer-events-none absolute top-0 left-0 h-full w-[3px] origin-top scale-y-0 bg-[var(--primary)] transition-transform duration-300 ease-out group-hover:scale-y-100" />

                    <div className="flex flex-1 flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                      <h3 className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight tracking-[-0.02em] text-[var(--text)] transition-transform duration-300 ease-out group-hover:translate-x-2">
                        {service.title}
                      </h3>
                      <p className="max-w-md text-[var(--muted)] md:flex-1 md:text-right">
                        {service.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Icon className="h-7 w-7 text-[var(--text)]" strokeWidth={1.5} />
                      <ChevronRight
                        className="h-5 w-5 text-[var(--muted)] transition-transform group-hover:translate-x-1"
                        strokeWidth={1.5}
                      />
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <ServiceModal service={active} Icon={ActiveIcon} onClose={() => setActive(null)} />
    </section>
  );
}
