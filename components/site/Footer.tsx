import Image from "next/image";
import Link from "next/link";
import { company } from "@/lib/company";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--bg)]">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-12 md:py-16">
        <div className="flex items-center gap-4">
          <Image
            src="/images/VPM-transparent-logo.png"
            alt={`${company.name} logotyp`}
            width={160}
            height={56}
            className="h-12 w-auto"
          />
        </div>

        <div className="text-sm text-[var(--muted)]">
          © {year} {company.name} · Org.nr {company.orgNr} · {company.address.city}, {company.region}
        </div>

        <div className="flex items-center gap-6 text-sm">
          <a
            href={`mailto:${company.email}`}
            className="font-medium text-[var(--text)] hover:text-[var(--primary)]"
          >
            {company.email}
          </a>
          <Link
            href="/integritetspolicy"
            className="text-[var(--muted)] hover:text-[var(--text)]"
          >
            Integritetspolicy
          </Link>
        </div>
      </div>
    </footer>
  );
}
