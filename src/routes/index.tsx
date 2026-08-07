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
import { HomeFaq, homeFaqs } from "@/components/site/HomeFaq";
import { services, SITE_URL } from "@/components/site/services-data";

const TITLE = "Estética Automotiva em Joinville | Clínica do Carro";
const DESCRIPTION =
  "Estética automotiva em Joinville/SC desde 2013: polimento técnico, vitrificação, higienização interna, restauração de faróis, polimento de vidros, cristalização de para-brisa e lavação premium. Orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE, key: "title" },
      { name: "description", content: DESCRIPTION, key: "description" },
      { property: "og:title", content: TITLE, key: "og:title" },
      { property: "og:description", content: DESCRIPTION, key: "og:description" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: `${SITE_URL}/logo.png` },
      { name: "twitter:card", content: "summary_large_image", key: "twitter:card" },
      { name: "twitter:title", content: TITLE, key: "twitter:title" },
      { name: "twitter:description", content: DESCRIPTION, key: "twitter:description" },
      { name: "twitter:image", content: `${SITE_URL}/logo.png`, key: "twitter:image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1", key: "robots" },
      { property: "og:site_name", content: "Clínica do Carro Studio Detail" },
      { name: "geo.region", content: "BR-SC" },
      { name: "geo.placename", content: "Joinville" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["LocalBusiness", "AutoBodyShop"],
              "@id": `${SITE_URL}#localbusiness`,
              name: "Clínica do Carro Studio Detail",
              description: DESCRIPTION,
              url: SITE_URL,
              image: `${SITE_URL}/logo.png`,
              logo: `${SITE_URL}/icons/favicon-512x512.png`,
              telephone: "+5547999940973",
              priceRange: "$$",
              foundingDate: "2013",
              currenciesAccepted: "BRL",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Alois Finder, 1401",
                addressLocality: "Joinville",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              areaServed: { "@type": "City", name: "Joinville" },
              sameAs: ["https://wa.me/5547999940973"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Serviços de estética automotiva em Joinville",
                itemListElement: services.map((s) => ({
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: `${s.nome} em Joinville`,
                    url: `${SITE_URL}/${s.slug}`,
                  },
                })),
              },
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}#faq`,
              mainEntity: homeFaqs.map((f) => ({
                "@type": "Question",
                name: f.pergunta,
                acceptedAnswer: { "@type": "Answer", text: f.resposta },
              })),
            },
          ],
        }),
      },
    ],
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
        <HomeFaq />
        <CTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}
