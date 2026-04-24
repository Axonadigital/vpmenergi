export const company = {
  name: "VPM Energi AB",
  shortName: "VPM Energi",
  tagline: "VVS i Jämtland – värme, vatten och sanitet som håller",
  city: "Lit",
  region: "Jämtland",
  foundedYear: 2012,
  // [DEMO-ANTAGANDE] rimligt upptagningsområde runt Lit
  serviceArea: ["Lit", "Östersund", "Brunflo", "Krokom", "Häggenås", "Föllinge"],
  phone: {
    display: "073-270 05 30",
    tel: "+46732700530",
  },
  email: "vpmeab@gmail.com",
  address: {
    street: "Litsvägen XX", // [DEMO-ANTAGANDE]
    zip: "836 22",
    city: "Lit",
  },
  hours: {
    weekdays: "07:00–17:00",
    emergency: "Jour enligt överenskommelse",
  },
  orgNr: "XXX XXX-XXXX", // [DEMO-ANTAGANDE]
  services: [
    {
      title: "Fjärrvärmecentraler",
      desc: "Installation, service och byte av fjärrvärmecentraler.",
      icon: "Flame",
    },
    {
      title: "Värmepumpsbyten",
      desc: "Byte och installation av bergvärme, luft/vatten och frånluft.",
      icon: "Thermometer",
    },
    {
      title: "Felsökning värmesystem",
      desc: "Snabb diagnos när värmen sviker – vi hittar grundorsaken.",
      icon: "Search",
    },
    {
      title: "Vatten & sanitet",
      desc: "Installation och service av VA-system, avlopp och tappvatten.",
      icon: "Droplet",
    },
    {
      title: "Service, underhåll & jour",
      desc: "Planerat underhåll och jourservice när det krånglar — vi rycker ut snabbt.",
      icon: "Wrench",
    },
  ] as const,
  // [DEMO-ANTAGANDE] platshållare-projekt — byts ut mot riktiga referensjobb när kunden levererar bildarkiv + beskrivningar
  projects: [
    {
      title: "Fjärrvärmecentral — villa i Lit",
      year: 2024,
      location: "Lit",
      desc: "Byte av en 15 år gammal central i en äldre villa. Ny shuntgrupp, isolerade rör och injustering av hela värmesystemet.",
      image: "/images/projects/project-1-fjarrvarme.jpg",
    },
    {
      title: "Bergvärmepump — fritidshus",
      year: 2023,
      location: "Krokom",
      desc: "Installation av bergvärmepump på ett fritidshus som tidigare värmdes med direktverkande el. Betydligt lägre driftkostnad.",
      image: "/images/projects/project-2-bergvarme.jpg",
    },
    {
      title: "Felsökning värmesystem",
      year: 2023,
      location: "Östersund",
      desc: "Akut utryckning till en hyresfastighet där värmen slagits ut. Lokaliserade problemet inom två timmar och fick igång systemet samma kväll.",
      image: "/images/projects/project-3-service.jpg",
    },
    {
      title: "Servicepaket — lantbruk",
      year: 2022,
      location: "Häggenås",
      desc: "Löpande underhållsavtal för ett jordbruk med flera värmesystem. Årligt genomgångsbesök med statusrapport på alla delar.",
      image: "/images/projects/project-4-underhall.jpg",
    },
  ] as const,
} as const;

export type Company = typeof company;
