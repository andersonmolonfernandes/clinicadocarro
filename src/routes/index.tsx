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
import { services, SITE_URL, primaryImage, absUrl } from "@/components/site/services-data";

const SHARE_IMAGE = absUrl(primaryImage(services[0]!) ?? "/logo.png");

const TITLE = "Estética Automotiva em Joinville | Clínica do Carro";
const DESCRIPTION =
  "Estética automotiva em Joinville/SC desde 2013: polimento técnico, vitrificação, higienização interna, restauração de faróis e outros serviços especializados. Orçamento pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE, key: "title" },
      { name: "description", content: DESCRIPTION, key: "description" },
      { property: "og:title", content: TITLE, key: "og:title" },
      { property: "og:description", content: DESCRIPTION, key: "og:description" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: SHARE_IMAGE },
      { property: "og:image:alt", content: "Clínica do Carro | Estética Automotiva em Joinville" },
      { name: "twitter:card", content: "summary_large_image", key: "twitter:card" },
      { name: "twitter:title", content: TITLE, key: "twitter:title" },
      { name: "twitter:description", content: DESCRIPTION, key: "twitter:description" },
      { name: "twitter:image", content: SHARE_IMAGE, key: "twitter:image" },
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
              // Complementa o nó de negócio declarado em __root.tsx (mesmo @id).
              "@id": `${SITE_URL}/#organization`,
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
              "@type": "WebPage",
              "@id": `${SITE_URL}/#webpage`,
              url: `${SITE_URL}/`,
              name: TITLE,
              description: DESCRIPTION,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#organization` },
            },
            {
              "@type": "FAQPage",
              "@id": `${SITE_URL}/#faq`,
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
