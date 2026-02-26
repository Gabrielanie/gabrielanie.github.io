import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

const CARD_ACCENTS = ["var(--purple)", "var(--cyan)", "var(--pink)"];

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="py-24 md:py-32" style={{ borderTop: "1px solid var(--border)" }} ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <div className="eyebrow justify-center mb-4">Kind words</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Client <span className="grad-text-a">Testimonials</span>
          </h2>
          <p className="text-white/40 text-sm">What clients say about working with me</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="rounded-2xl p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
              style={{ background: "var(--surface-1)", border: "1px solid var(--border)" }}
            >
              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl" style={{ background: CARD_ACCENTS[i % CARD_ACCENTS.length] }} />

              <Quote size={28} style={{ color: CARD_ACCENTS[i % CARD_ACCENTS.length], opacity: 0.6 }} />

              {/* Stars */}
              <div className="flex gap-0.5 -mt-1">
                {Array.from({ length: 5 }).map((_, k) => (
                  <span key={k} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>

              <div className="flex items-center gap-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                <div className="w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.name}</div>
                  <div className="text-xs text-white/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
