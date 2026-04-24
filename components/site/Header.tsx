"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { company } from "@/lib/company";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "#tjanster", label: "Tjänster" },
  { href: "#projekt", label: "Samarbetspartners" },
  { href: "#omrade", label: "Område" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-[var(--border)] bg-[var(--bg)]/90 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[160px] max-w-[1400px] items-center justify-between px-6 md:px-12">
          <Link
            href="/"
            aria-label={`${company.name} – startsida`}
            className="flex items-center"
          >
            <Image
              src="/images/VPM-transparent-logo.png"
              alt={`${company.name} logotyp`}
              width={320}
              height={104}
              priority
              className="h-28 w-auto md:h-32"
            />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--primary)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${company.email}`}
              className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--primary)] px-5 text-sm font-medium text-[var(--primary-ink)] transition-transform hover:scale-[1.03]"
            >
              {company.email}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Öppna meny"
            className="flex h-12 w-12 items-center justify-center text-[var(--text)] md:hidden"
          >
            <Menu className="h-7 w-7" strokeWidth={1.5} />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} links={navLinks} />
    </>
  );
}
