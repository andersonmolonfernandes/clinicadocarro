import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Clínica do Carro — Studio Detail",
  image: "/logo.png",
  "@id": "https://clinicadocarro.com.br",
  url: "https://clinicadocarro.com.br",
  telephone: "+5547999940973",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Alois Finder, 1401",
    addressLocality: "Joinville",
    addressRegion: "SC",
    addressCountry: "BR",
  },
  sameAs: ["https://wa.me/5547999940973"],
  foundingDate: "2013",
};

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#00e676" },
      { title: "Clínica do Carro — Studio Detail | Joinville/SC" },
      {
        name: "description",
        content:
          "Estética automotiva em Joinville/SC desde 2013. Polimento, vitrificação, higienização e mais. Agende pelo WhatsApp.",
      },
      { name: "author", content: "Clínica do Carro" },
      { property: "og:title", content: "Clínica do Carro — Studio Detail | Joinville/SC" },
      {
        property: "og:description",
        content:
          "Polimento, vitrificação, higienização e muito mais. Agende agora pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica do Carro — Studio Detail | Joinville/SC" },
      { name: "description", content: "Estética automotiva em Joinville desde 2013. Polimento, vitrificação, higienização, faróis, vidros e martelinho de ouro. Agende pelo WhatsApp!" },
      { property: "og:description", content: "Estética automotiva em Joinville desde 2013. Polimento, vitrificação, higienização, faróis, vidros e martelinho de ouro. Agende pelo WhatsApp!" },
      { name: "twitter:description", content: "Estética automotiva em Joinville desde 2013. Polimento, vitrificação, higienização, faróis, vidros e martelinho de ouro. Agende pelo WhatsApp!" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/TdeeJbTXzfQ35wG59qXUqhSclMq1/social-images/social-1776604886669-1000024715.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/TdeeJbTXzfQ35wG59qXUqhSclMq1/social-images/social-1776604886669-1000024715.webp" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/logo.png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@500;600;700&family=Barlow:wght@300;400;500;600&family=Orbitron:wght@500;700&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
