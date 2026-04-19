import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  thousands?: boolean;
};

const stats: Stat[] = [
  { value: 11, suffix: "+", label: "Anos de Experiência" },
  { value: 5000, suffix: "+", label: "Carros Atendidos", thousands: true },
  { value: 100, suffix: "%", label: "Satisfação" },
  { value: 8, suffix: "+", label: "Serviços" },
];

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(stat.value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  const formatted = stat.thousands ? n.toLocaleString("pt-BR") : n.toString();
  return (
    <span className="text-green-brand glow-green">
      {formatted}
      {stat.suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 border-y border-[rgba(0,230,118,0.15)]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <div
              className="font-[var(--font-display)] leading-none"
              style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)" }}
            >
              <Counter stat={s} start={inView} />
            </div>
            <p
              className="mt-3 font-[var(--font-body)] text-[var(--muted-text)] uppercase"
              style={{ fontSize: "0.8rem", letterSpacing: "2px" }}
            >
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
