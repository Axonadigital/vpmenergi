"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { company } from "@/lib/company";

export default function Hero() {
  const reduce = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: reduce ? 0 : i, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]"
    >
      <Image
        src="/images/fjäll.jpg"
        alt="Jämtlandsfjällen"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/95 via-[var(--bg)]/70 to-[var(--bg)]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-transparent" />

      <div className="relative mx-auto grid min-h-[100dvh] max-w-[1400px] grid-cols-1 gap-12 px-6 pt-12 pb-20 md:grid-cols-12 md:gap-10 md:px-12 md:pt-20 md:pb-32">
        <div className="md:col-span-8 md:flex md:flex-col md:justify-center">
          <motion.p
            className="eyebrow flex items-center gap-3"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span>VVS-FIRMA</span>
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--primary)]" />
            <span>LIT</span>
            <span className="inline-block h-[6px] w-[6px] rounded-full bg-[var(--primary)]" />
            <span>JÄMTLAND</span>
          </motion.p>

          <h1 className="font-display mt-8 text-[clamp(2.5rem,6.5vw,5.5rem)] leading-[1.0] tracking-[-0.03em] text-[var(--text)]">
            <motion.span className="block" variants={fadeUp} initial="hidden" animate="show" custom={0.1}>
              {company.shortName} —
            </motion.span>
            <motion.span
              className="block text-[var(--primary)]"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              Rörmokare i {company.region}
            </motion.span>
          </h1>

          <motion.p
            className="mt-8 max-w-xl text-[17px] leading-relaxed text-[var(--muted)] md:text-[19px]"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.4}
          >
            Installation, service och renovering inom VVS — snabbt och pålitligt.
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-start gap-5 sm:flex-row sm:items-center"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.8}
          >
            <a
              href="#kontakt"
              className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[var(--text)] px-8 text-base font-medium text-[var(--bg)] transition-transform hover:scale-[1.02]"
            >
              Kontakta oss
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
            </a>
            <a
              href="#tjanster"
              className="group inline-flex items-center gap-2 text-base font-medium text-[var(--text)] underline-offset-[6px] hover:underline"
            >
              Våra tjänster
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" strokeWidth={2} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
