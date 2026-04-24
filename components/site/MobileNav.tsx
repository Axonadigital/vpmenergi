"use client";

import { useEffect } from "react";
import { X, Mail } from "lucide-react";
import { company } from "@/lib/company";

type NavLink = { href: string; label: string };

export default function MobileNav({
  open,
  onClose,
  links,
}: {
  open: boolean;
  onClose: () => void;
  links: NavLink[];
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Meny"
      className="fixed inset-0 z-50 flex flex-col bg-[var(--bg)] md:hidden"
    >
      <div className="flex h-[72px] items-center justify-between border-b border-[var(--border)] px-6">
        <span className="eyebrow">Meny</span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Stäng meny"
          className="flex h-12 w-12 items-center justify-center"
        >
          <X className="h-7 w-7" strokeWidth={1.5} />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center gap-2 px-6">
        {links.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="font-display block py-3 text-[clamp(2.5rem,12vw,5rem)] leading-none tracking-tight text-[var(--text)] transition-colors hover:text-[var(--primary)]"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            {link.label}.
          </a>
        ))}
      </nav>

      <div className="border-t border-[var(--border)] px-6 py-6">
        <a
          href={`mailto:${company.email}`}
          onClick={onClose}
          className="flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[var(--primary)] px-6 text-base font-medium text-[var(--primary-ink)]"
        >
          <Mail className="h-5 w-5" strokeWidth={2} />
          Mejla oss
        </a>
      </div>
    </div>
  );
}
