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

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#00e676" },
      { name: "application-name", content: "Clínica do Carro Studio Detail" },
      { name: "apple-mobile-web-app-title", content: "Clínica do Carro" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      { title: "Clínica do Carro Studio Detail | Joinville/SC" },
      {
        name: "description",
        content:
          "Estética automotiva em Joinville/SC desde 2013. Polimento, vitrificação, higienização e mais. Agende pelo WhatsApp.",
      },
      { name: "author", content: "Clínica do Carro" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:title", content: "Clínica do Carro Studio Detail | Joinville/SC" },
      {
        property: "og:description",
        content:
          "Polimento, vitrificação, higienização e muito mais. Agende agora pelo WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Clínica do Carro Studio Detail" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Clínica do Carro Studio Detail | Joinville/SC" },
      { name: "twitter:description", content: "Estética automotiva em Joinville desde 2013. Polimento, vitrificação, higienização, faróis, vidros e martelinho de ouro. Agende pelo WhatsApp!" },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/icons/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/icons/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "48x48", href: "/icons/favicon-48x48.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/icons/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/icons/favicon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icons/favicon-512x512.png" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
      { rel: "mask-icon", href: "/icons/favicon-512x512.png", color: "#00e676" },
      { rel: "manifest", href: "/manifest.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap",
      },

      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["Organization", "AutoBodyShop", "LocalBusiness"],
              "@id": "https://clinicadocarro.vercel.app/#organization",
              name: "Clínica do Carro",
              legalName: "Clínica do Carro Studio Detail",
              alternateName: ["Clínica do Carro Studio Detail", "Clínica do Carro Joinville"],
              description:
                "Estética automotiva em Joinville/SC desde 2013: polimento técnico, vitrificação, higienização interna, martelinho de ouro, restauração de faróis, cristalização de para-brisa e lavação premium.",
              url: "https://clinicadocarro.vercel.app/",
              telephone: "+5547999940973",
              foundingDate: "2013",
              priceRange: "$$",
              currenciesAccepted: "BRL",
              knowsLanguage: "pt-BR",
              slogan: "Estética automotiva premium em Joinville",
              areaServed: [
                { "@type": "City", name: "Joinville" },
                { "@type": "State", name: "Santa Catarina" },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua Alois Finder, 1401",
                addressLocality: "Joinville",
                addressRegion: "SC",
                postalCode: "89226-000",
                addressCountry: "BR",
              },
              geo: { "@type": "GeoCoordinates", latitude: -26.2679, longitude: -48.8172 },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "08:00",
                  closes: "12:00",
                },
              ],
              sameAs: [
                "https://wa.me/5547999940973",
                "https://maps.google.com/?q=Rua+Alois+Finder,+1401,+Aventureiro,+Joinville,+SC",
              ],
              hasMap:
                "https://maps.google.com/?q=Rua+Alois+Finder,+1401,+Aventureiro,+Joinville,+SC",
              logo: {
                "@type": "ImageObject",
                "@id": "https://clinicadocarro.vercel.app/#logo",
                url: "https://clinicadocarro.vercel.app/logo.png",
                contentUrl: "https://clinicadocarro.vercel.app/logo.png",
                width: 1254,
                height: 1254,
                caption: "Clínica do Carro Studio Detail",
              },
              image: "https://clinicadocarro.vercel.app/logo.png",
            },
            {
              "@type": "WebSite",
              "@id": "https://clinicadocarro.vercel.app/#website",
              url: "https://clinicadocarro.vercel.app/",
              name: "Clínica do Carro Studio Detail",
              alternateName: ["Clínica do Carro", "Clínica do Carro Joinville"],
              inLanguage: "pt-BR",
              publisher: { "@id": "https://clinicadocarro.vercel.app/#organization" },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://clinicadocarro.vercel.app/servicos?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            },
          ],
        }),
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
