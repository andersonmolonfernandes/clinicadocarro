import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const diferenciais = [
  "Produtos de alto desempenho",
  "Técnica em cada etapa",
  "Atenção aos detalhes",
  "Resultado garantido",
];

export function About() {
  return (
    <section
      id="sobre"
      className="py-[110px] px-5 md:px-10"
      style={{ background: "#0d0d0d" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[72px] items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="font-[var(--font-mono-tech)] text-gold-brand text-[0.68rem] mb-4"
            style={{ letterSpacing: "5px" }}
          >
            QUEM SOMOS
          </p>
          <h2
            className="font-[var(--font-display)] text-white"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", lineHeight: 0.95 }}
          >
            Sobre a <span className="text-green-brand">CLÍNICA DO CARRO</span>
          </h2>
          <p className="mt-6 font-[var(--font-body)] font-light text-[var(--muted-text)] text-lg leading-relaxed max-w-xl">
            Estamos em Joinville desde 2013. Aqui você encontra serviços de
            estética automotiva feitos com técnica e atenção aos detalhes. Sem
            enrolação — você agenda, a gente faz.
          </p>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
            }}
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {diferenciais.map((d) => (
              <motion.li
                key={d}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex items-center gap-3 rounded-md px-4 py-3"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(0,230,118,0.15)",
                }}
              >
                <CheckCircle2 className="w-5 h-5 text-green-brand shrink-0" />
                <span className="font-[var(--font-heading)] font-semibold uppercase text-white text-sm tracking-wide">
                  {d}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative rounded-[10px] overflow-hidden flex items-center justify-center"
          style={{
            minHeight: 400,
            background:
              "linear-gradient(135deg, rgba(0,230,118,0.04), rgba(0,0,0,0.6))",
            border: "1px solid rgba(0,230,118,0.15)",
          }}
        >
          <motion.img
            src="/logo.png"
            alt=""
            loading="lazy"
            className="max-w-[250px] w-3/5"
            animate={{
              opacity: [0.18, 0.28, 0.18],
              scale: [1, 1.04, 1],
              rotate: [0, 1.5, 0, -1.5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.span
            aria-hidden
            className="absolute font-[var(--font-display)] pointer-events-none select-none"
            style={{
              fontSize: "7rem",
              right: 24,
              bottom: -10,
            }}
            animate={{ color: ["rgba(0,230,118,0.04)", "rgba(0,230,118,0.12)", "rgba(0,230,118,0.04)"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            2013
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}
