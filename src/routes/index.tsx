import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { CTA } from "@/components/site/CTA";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { FloatingWhats } from "@/components/site/FloatingWhats";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Clínica do Carro — Studio Detail | Estética Automotiva em Joinville/SC",
      },
      {
        name: "description",
        content:
          "Polimento, vitrificação, higienização e mais. Estética automotiva em Joinville/SC desde 2013. Agende pelo WhatsApp.",
      },
      {
        property: "og:title",
        content: "Clínica do Carro — Studio Detail | Joinville/SC",
      },
      {
        property: "og:description",
        content:
          "Polimento, vitrificação, higienização e mais. Agende pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://clinicadocarro.vercel.app/" },
      { property: "og:image", content: "https://clinicadocarro.vercel.app/logo.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://clinicadocarro.vercel.app/logo.png" },
      { name: "robots", content: "index, follow" },
    ],
    links: [{ rel: "canonical", href: "https://clinicadocarro.vercel.app/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <CTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}
