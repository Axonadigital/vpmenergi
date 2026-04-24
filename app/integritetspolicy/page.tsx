import Link from "next/link";
import { company } from "@/lib/company";

export const metadata = {
  title: `Integritetspolicy – ${company.name}`,
};

export default function IntegritetspolicyPage() {
  return (
    <main className="mx-auto flex min-h-dvh max-w-[1400px] flex-col px-6 py-20 md:px-12">
      <Link
        href="/"
        className="eyebrow hover:text-[var(--primary)]"
      >
        ← Tillbaka
      </Link>
      <h1 className="font-display mt-12 text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-[-0.04em]">
        Integritetspolicy
      </h1>
      <p className="mt-8 text-[var(--muted)]">Kommer snart.</p>
    </main>
  );
}
