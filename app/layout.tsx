import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { company } from "@/lib/company";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VPM Energi AB – VVS i Lit och Jämtland",
  description:
    "Komplett VVS i Jämtland sedan 2012. Fjärrvärmecentraler, värmepumpar, felsökning och service. Utgår från Lit. Ring 073-270 05 30.",
  openGraph: {
    title: "VPM Energi AB – VVS i Lit och Jämtland",
    description:
      "Komplett VVS i Jämtland sedan 2012. Fjärrvärmecentraler, värmepumpar, felsökning och service.",
    locale: "sv_SE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  description:
    "Komplett VVS i Jämtland sedan 2012. Fjärrvärmecentraler, värmepumpar, felsökning och service.",
  telephone: company.phone.tel,
  email: company.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: company.address.street,
    postalCode: company.address.zip,
    addressLocality: company.address.city,
    addressCountry: "SE",
  },
  areaServed: company.serviceArea.map((c) => ({ "@type": "City", name: c })),
  foundingDate: String(company.foundedYear),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${bricolage.variable} ${inter.variable}`}
    >
      <body className="min-h-dvh bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
