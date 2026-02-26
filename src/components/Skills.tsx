import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Smartphone, Cloud, ShoppingBag } from "lucide-react";
import { SKILLS } from "@/lib/data";

const CAT_COLORS = [
  { color: "#8b5cf6", bg: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.35)", tagBorder: "rgba(139,92,246,0.3)", tagColor: "#c4b5fd", tagBg: "rgba(139,92,246,0.1)" },
  { color: "#06b6d4", bg: "rgba(6,182,212,0.12)",  border: "rgba(6,182,212,0.35)",  tagBorder: "rgba(6,182,212,0.3)",  tagColor: "#67e8f9", tagBg: "rgba(6,182,212,0.1)" },
  { color: "#ec4899", bg: "rgba(236,72,153,0.12)", border: "rgba(236,72,153,0.35)", tagBorder: "rgba(236,72,153,0.3)", tagColor: "#f9a8d4", tagBg: "rgba(236,72,153,0.1)" },
  { color: "#f59e0b", bg: "rgba(245,158,11,0.12)", border: "rgba(245,158,11,0.35)", tagBorder: "rgba(245,158,11,0.3)", tagColor: "#fcd34d", tagBg: "rgba(245,158,11,0.1)" },
  { color: "#22c55e", bg: "rgba(34,197,94,0.12)",  border: "rgba(34,197,94,0.35)",  tagBorder: "rgba(34,197,94,0.3)",  tagColor: "#86efac", tagBg: "rgba(34,197,94,0.1)" },
];

const ICONS = [Code2, Server, Smartphone, Cloud, ShoppingBag];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [active, setActive] = useState(0);
  const cat = SKILLS[active];
  const c = CAT_COLORS[active % CAT_COLORS.length];
  const Icon = ICONS[active % ICONS.length];

  return (
    <section id="skills" className="py-24 md:py-32 scroll-mt-20" style={{ borderTop: "1px solid var(--border)" }} ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-14">
          <div className="eyebrow justify-center mb-4">What I work with</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Technical <span className="grad-text-b">Skills</span>
          </h2>
          <p className="text-white/40 text-sm">Tools &amp; technologies I use daily</p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {SKILLS.map((s, i) => {
            const col = CAT_COLORS[i % CAT_COLORS.length];
            const Ic = ICONS[i % ICONS.length];
            const isActive = active === i;
            return (
              <button
                key={s.title}
                onClick={() => setActive(i)}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer border"
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  background: isActive ? col.bg : "transparent",
                  borderColor: isActive ? col.border : "var(--border)",
                  color: isActive ? col.color : "rgba(255,255,255,0.45)",
                  boxShadow: isActive ? `0 0 16px ${col.bg}` : "none",
                }}
              >
                <Ic size={14} />
                {s.title}
              </button>
            );
          })}
        </motion.div>

        {/* Skill panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: "var(--surface-1)", border: `1px solid ${c.border}` }}
          >
            {/* Top gradient line */}
            <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${c.color}, transparent)` }} />

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: c.bg, border: `1px solid ${c.border}` }}>
                <Icon size={22} style={{ color: c.color }} />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{cat.title}</h3>
                <p className="text-white/35 text-xs">{cat.items.length} technologies</p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5">
              {cat.items.map((item, j) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: j * 0.03 }}
                  className="px-3.5 py-1.5 rounded-full text-sm font-medium cursor-default transition-colors duration-200 hover:text-white"
                  style={{ background: c.tagBg, border: `1px solid ${c.tagBorder}`, color: c.tagColor }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
