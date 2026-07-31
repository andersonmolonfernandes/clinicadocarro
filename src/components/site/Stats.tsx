import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix: string; label: string; thousands?: boolean };

const stats: Stat[] = [
  { value: 13, suffix: "+", label: "Anos de experiência" },
  { value: 5000, suffix: "+", label: "Carros atendidos", thousands: true },
  { value: 100, suffix: "%", label: "Satisfação" },
  { value: 9, suffix: "", label: "Serviços especializados" },
];

function Counter({ stat, start }: { stat: Stat; start: boolean }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    const duration = 1500;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / duration);
      setN(Math.round(stat.value * (1 - Math.pow(1 - t, 3))));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <span className="text-neon">
      {stat.thousands ? n.toLocaleString("pt-BR") : n}
      {stat.suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35, once: true });

  return (
    <section className="border-y border-white/[0.07]" style={{ background: "#0d0d0d" }}>
      <div
        ref={ref}
        className="shell grid grid-cols-2 gap-x-6 gap-y-10 py-14 md:grid-cols-4 md:py-16"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div
              className="font-semibold leading-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.4rem)",
              }}
            >
              <Counter stat={s} start={inView} />
            </div>
            <p className="mx-auto mt-3 max-w-[9rem] text-[0.78rem] font-medium uppercase leading-snug tracking-[0.14em] text-white/45">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
