import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Projects from "@/components/site/Projects";
import ServiceArea from "@/components/site/ServiceArea";
import Stats from "@/components/site/Stats";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <ServiceArea />
      <Stats />
      <Contact />
      <Footer />
    </main>
  );
}
