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
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/icons/favicon-512x512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/icons/apple-touch-icon.png" },
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
              "@type": "Organization",
              "@id": "https://clinicadocarro.vercel.app/#organization",
              name: "Clínica do Carro Studio Detail",
              url: "https://clinicadocarro.vercel.app/",
              logo: {
                "@type": "ImageObject",
                url: "https://clinicadocarro.vercel.app/icons/favicon-512x512.png",
                width: 512,
                height: 512,
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://clinicadocarro.vercel.app/#website",
              url: "https://clinicadocarro.vercel.app/",
              name: "Clínica do Carro Studio Detail",
              alternateName: "Clínica do Carro",
              inLanguage: "pt-BR",
              publisher: { "@id": "https://clinicadocarro.vercel.app/#organization" },
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
