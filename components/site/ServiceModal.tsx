"use client";

import { useEffect } from "react";
import { X, Mail, type LucideIcon } from "lucide-react";
import { company } from "@/lib/company";

type Service = {
  title: string;
  desc: string;
};

export default function ServiceModal({
  service,
  Icon,
  onClose,
}: {
  service: Service | null;
  Icon: LucideIcon | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!service) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-0 md:items-center md:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Stäng"
          className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center text-[var(--text)] hover:text-[var(--primary)]"
        >
          <X className="h-6 w-6" strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-4">
          {Icon && <Icon className="h-8 w-8 text-[var(--primary)]" strokeWidth={1.5} />}
          <p className="eyebrow">Tjänst</p>
        </div>

        <h3 className="font-display mt-6 text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] tracking-[-0.03em] text-[var(--text)]">
          {service.title}
        </h3>

        <p className="mt-6 text-[17px] leading-relaxed text-[var(--muted)]">
          {service.desc}
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow">Vill du veta mer?</p>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 text-base font-medium text-[var(--primary-ink)] transition-transform hover:scale-[1.02]"
          >
            <Mail className="h-4 w-4" strokeWidth={2} />
            Mejla oss
          </a>
        </div>
      </div>
    </div>
  );
}
