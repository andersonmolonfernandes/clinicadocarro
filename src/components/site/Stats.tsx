import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  thousands?: boolean;
};

const stats: Stat[] = [
  { value: 13, suffix: "+", label: "Anos de Experiência" },
  { value: 5000, suffix: "+", label: "Carros Atendidos", thousands: true },
  { value: 100, suffix: "%", label: "Satisfação" },
  { value: 8, suffix: "+", label: "Serviços" },
];

function Counter({
  stat,
  start,
  onDone,
}: {
  stat: Stat;
  start: boolean;
  onDone: () => void;
}) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) {
      setN(0);
      return;
    }
    const duration = 1800;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setN(Math.round(stat.value * eased));
      if (t < 1) raf = requestAnimationFrame(tick);
      else onDone();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value, onDone]);

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
  const inView = useInView(ref, { amount: 0.3, once: true });

  return (
    <section
      ref={ref}
      className="py-16 border-y border-[rgba(0,230,118,0.15)]"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <StatItem key={s.label} stat={s} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}

function StatItem({
  stat,
  index,
  inView,
}: {
  stat: Stat;
  index: number;
  inView: boolean;
}) {
  const [bounced, setBounced] = useState(false);
  useEffect(() => {
    if (!inView) setBounced(false);
  }, [inView]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <motion.div
        className="font-[var(--font-display)] leading-none inline-block"
        style={{ fontSize: "clamp(2.8rem, 5vw, 4.2rem)" }}
        animate={bounced ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Counter stat={stat} start={inView} onDone={() => setBounced(true)} />
      </motion.div>
      <motion.div
        className="mx-auto mt-2 h-[2px] bg-green-brand origin-center"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.7, delay: 0.4 + index * 0.08, ease: "easeOut" }}
        style={{ width: 40, opacity: 0.6 }}
      />
      <p
        className="mt-3 font-[var(--font-body)] text-[var(--muted-text)] uppercase"
        style={{ fontSize: "0.8rem", letterSpacing: "2px" }}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}
