import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Standard scroll reveal used across every section for consistent motion. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
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
      <Reveal>
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
      </Reveal>
    </div>
  );
}

export { EASE };
