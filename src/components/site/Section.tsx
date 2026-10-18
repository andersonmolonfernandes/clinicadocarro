import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Reveal intencionalmente sem animação de entrada: o conteúdo fica 100%
 * visível no primeiro frame do SSR/HTML (LCP imediato e indexação
 * completa por crawlers e IAs). Mantido como componente para preservar
 * a API usada pelas seções.
 */
export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className="mt-4 text-white"
        style={{ fontSize: "clamp(2rem, 4.6vw, 3.25rem)", lineHeight: 1.05 }}
      >
        {title}
        {highlight ? (
          <>
            {" "}
            <span className="text-neon">{highlight}</span>
          </>
        ) : null}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-[0.98rem] leading-relaxed text-white/60 ${
            isCenter ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export { EASE };
