import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, Clock, ChevronRight, ArrowRight, Plus } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhats } from "@/components/site/FloatingWhats";
import { CTA } from "@/components/site/CTA";
import { Location } from "@/components/site/Location";
import { BeforeAfter, VideoCard } from "@/components/site/Services";
import { waLink, trackWhatsAppClick } from "@/components/site/constants";
import { services, getService, SITE_URL } from "@/components/site/services-data";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: params.slug };
  },
  head: ({ params }) => {
    const s = getService(params.slug);
    if (!s) return { meta: [{ title: "Página não encontrada", key: "title" }, { name: "robots", content: "noindex", key: "robots" }] };
    const url = `${SITE_URL}/${s.slug}`;
    return {
      meta: [
        { title: s.seoTitle, key: "title" },
        { name: "description", content: s.seoDescription, key: "description" },
        { property: "og:title", content: s.seoTitle, key: "og:title" },
        { property: "og:description", content: s.seoDescription, key: "og:description" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        { property: "og:image", content: `${SITE_URL}/logo.png`, key: "og:image" },
        { property: "og:image:alt", content: `${s.nome} em Joinville | Clínica do Carro`, key: "og:image:alt" },
        { name: "twitter:card", content: "summary_large_image", key: "twitter:card" },
        { name: "twitter:title", content: s.seoTitle, key: "twitter:title" },
        { name: "twitter:description", content: s.seoDescription, key: "twitter:description" },
        { name: "twitter:image", content: `${SITE_URL}/logo.png`, key: "twitter:image" },
        { name: "robots", content: "index, follow", key: "robots" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": `${url}#service`,
                name: `${s.nome} em Joinville`,
                serviceType: `${s.nome} automotivo`,
                description: s.seoDescription,
                url,
                areaServed: {
                  "@type": "City",
                  name: "Joinville",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Joinville",
                    addressRegion: "SC",
                    addressCountry: "BR",
                  },
                },
                provider: {
                  "@type": "LocalBusiness",
                  name: "Clínica do Carro Studio Detail",
                  "@id": `${SITE_URL}#localbusiness`,
                  url: SITE_URL,
                  telephone: "+5547999940973",
                  image: `${SITE_URL}/icons/favicon-512x512.png`,
                  priceRange: "$$",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Rua Alois Finder, 1401",
                    addressLocality: "Joinville",
                    addressRegion: "SC",
                    addressCountry: "BR",
                  },
                },
              },
              {
                "@type": "FAQPage",
                "@id": `${url}#faq`,
                mainEntity: s.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.pergunta,
                  acceptedAnswer: { "@type": "Answer", text: f.resposta },
                })),
              },
              {
                "@type": "BreadcrumbList",
                "@id": `${url}#breadcrumb`,
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Serviços",
                    item: `${SITE_URL}/servicos`,
                  },
                  { "@type": "ListItem", position: 3, name: s.nome, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  const outros = services.filter((o) => o.slug !== s.slug).slice(0, 6);

  return (
    <>
      <Header />
      <main>
        <article className="section-y">
          <div className="shell">
            <nav aria-label="Breadcrumb" className="pt-4">
              <ol className="flex flex-wrap items-center gap-1.5 text-[0.78rem] text-white/45">
                <li>
                  <Link to="/" className="hover:text-neon">
                    Início
                  </Link>
                </li>
                <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                <li>
                  <Link to="/servicos" className="hover:text-neon">
                    Serviços
                  </Link>
                </li>
                <ChevronRight aria-hidden className="h-3.5 w-3.5" />
                <li aria-current="page" className="text-white/70">
                  {s.nome}
                </li>
              </ol>
            </nav>

            <header className="mt-8 max-w-3xl">
              <span className="eyebrow">Estética automotiva em Joinville/SC</span>
              <h1
                className="mt-4 text-white"
                style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", lineHeight: 1.05 }}
              >
                {s.h1}
              </h1>
              <p className="mt-5 text-[1rem] leading-relaxed text-white/65">{s.descricao}</p>
              <a
                href={waLink(s.whatsapp)}
                onClick={() => trackWhatsAppClick("service")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-primary mt-7 w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" />
                Orçamento no WhatsApp
              </a>
            </header>

            <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-12">
              <div>
                {s.beforeAfter ? (
                  <BeforeAfter {...s.beforeAfter} />
                ) : s.image ? (
                  <div
                    className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08]"
                    style={{ aspectRatio: "16 / 9" }}
                  >
                    <img
                      src={s.image}
                      alt={s.alt ?? `${s.nome} — Clínica do Carro Joinville`}
                      width={1280}
                      height={720}
                      decoding="async"
                      fetchPriority="high"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}

                <div className="space-y-4">
                  {s.intro.map((p) => (
                    <p key={p.slice(0, 24)} className="text-[0.95rem] leading-relaxed text-white/70">
                      {p}
                    </p>
                  ))}
                </div>

                <h2 className="mt-12 text-2xl text-white">Benefícios do serviço</h2>
                <ul className="mt-4 space-y-2.5">
                  {s.lista.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.92rem] text-white/80">
                      <span className="mt-[0.55rem] h-1 w-1 shrink-0 rounded-full bg-neon" />
                      {item}
                    </li>
                  ))}
                </ul>

                <h2 className="mt-12 text-2xl text-white">Como fazemos o serviço</h2>
                <ol className="mt-4 space-y-2.5">
                  {s.processo.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-[0.92rem] text-white/75">
                      <span
                        className="mt-[0.1rem] grid h-6 w-6 shrink-0 place-items-center rounded-md text-[0.7rem] font-semibold text-neon"
                        style={{
                          background: "rgba(0,230,118,0.1)",
                          border: "1px solid rgba(0,230,118,0.22)",
                        }}
                      >
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                {(s.addOns ?? (s.addOn ? [s.addOn] : [])).length > 0 && (
                <section className="mt-10 border-t border-white/[0.06] pt-8">
                  <div className="mb-5"><p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-neon/80">Adicionais</p><h2 className="mt-1 text-2xl font-semibold text-white">Personalize seu serviço</h2><p className="mt-2 max-w-2xl text-[0.88rem] leading-relaxed text-white/48">Opções selecionadas para complementar o cuidado do veículo.</p></div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(s.addOns ?? (s.addOn ? [s.addOn] : [])).map((addOn) => { const AddOnIcon = addOn.Icon ?? Plus; return (
                      <div key={addOn.nome} className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025]">
                        {addOn.image ? <div className="relative aspect-[16/9] overflow-hidden bg-black"><img src={addOn.image} alt={addOn.alt ?? addOn.nome} loading="lazy" decoding="async" width={640} height={360} className="h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" /></div> : <div className="grid aspect-[16/9] place-items-center bg-gradient-to-br from-neon/[0.12] to-white/[0.02]"><AddOnIcon className="h-9 w-9 text-neon" /></div>}
                        <div className="p-5"><div className="flex items-start justify-between gap-3"><div><span className="text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-neon/75">Adicional</span><h3 className="mt-1 text-lg font-semibold text-white">{addOn.nome}</h3></div>{addOn.etiqueta && <span className="rounded-full border border-neon/20 bg-neon/[0.08] px-2 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-neon">{addOn.etiqueta}</span>}</div><p className="mt-2 text-[0.8rem] leading-relaxed text-white/52">{addOn.descricao}</p><a href={waLink(addOn.whatsapp)} onClick={() => trackWhatsAppClick("addon")} target="_blank" rel="noopener noreferrer" className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-neon px-4 py-3 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#06120b] transition-transform hover:-translate-y-0.5"><Plus className="h-4 w-4" />Adicionar ao serviço</a></div>
                      </div>
                    ); })}
                  </div>
                </section>
              )}

              {s.durabilidade && (
                  <p className="mt-8 inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[0.85rem] text-white/75">
                    <Clock className="h-4 w-4 shrink-0 text-neon" />
                    <span>
                      <span className="text-white/45">Durabilidade: </span>
                      {s.durabilidade}
                    </span>
                  </p>
                )}

                <h2 className="mt-12 text-2xl text-white">Perguntas frequentes</h2>
                <div className="mt-5 space-y-3">
                  {s.faqs.map((f) => (
                    <details key={f.pergunta} className="surface-card px-5 py-4">
                      <summary className="cursor-pointer list-none text-[0.95rem] font-semibold text-white">
                        <h3 className="inline text-[0.95rem] font-semibold text-white">
                          {f.pergunta}
                        </h3>
                      </summary>
                      <p className="mt-3 text-[0.9rem] leading-relaxed text-white/65">
                        {f.resposta}
                      </p>
                    </details>
                  ))}
                </div>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                {s.video && <VideoCard url={s.video} nome={s.nome} />}

                <div className="surface-card mt-6 p-5">
                  <h2 className="text-lg text-white">Outros serviços em Joinville</h2>
                  <ul className="mt-4 space-y-1">
                    {outros.map((o) => (
                      <li key={o.slug}>
                        <Link
                          to="/$slug"
                          params={{ slug: o.slug }}
                          className="flex items-center justify-between gap-2 rounded-lg px-2.5 py-2 text-[0.88rem] text-white/70 transition-colors hover:bg-white/[0.04] hover:text-neon"
                        >
                          {o.nome}
                          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/servicos"
                    className="mt-4 flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] bg-white/[0.03] px-4 py-2.5 text-[0.82rem] font-medium text-white/75 transition-colors hover:border-neon/40 hover:text-neon"
                  >
                    Ver todos os serviços
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <CTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhats />
    </>
  );
}
