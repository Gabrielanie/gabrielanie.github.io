"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Smartphone, Cloud, ShoppingBag } from "lucide-react";
import { SKILLS } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  code: <Code2 size={20} />,
  server: <Server size={20} />,
  smartphone: <Smartphone size={20} />,
  cloud: <Cloud size={20} />,
  layout: <ShoppingBag size={20} />,
};

const GRADIENTS = [
  "from-[#667eea] to-[#764ba2]",
  "from-[#f093fb] to-[#f5576c]",
  "from-[#4facfe] to-[#00f2fe]",
  "from-[#43e97b] to-[#38f9d7]",
  "from-[#fa709a] to-[#fee140]",
];

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [activeTab, setActiveTab] = useState(0);
  const cat = SKILLS[activeTab];

  return (
    <section
      id="skills"
      className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      {/* Eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="section-label justify-center mb-4"
      >
        What I work with
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-primary"
      >
        Technical Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
        className="text-white/40 text-center mb-12 text-sm"
      >
        Tools &amp; technologies I work with daily
      </motion.p>

      {/* Category tab row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25 }}
        className="flex flex-wrap justify-center gap-2 mb-10"
      >
        {SKILLS.map((s, i) => (
          <button
            key={s.title}
            onClick={() => setActiveTab(i)}
            className={`tab-pill flex items-center gap-2${activeTab === i ? " active" : ""}`}
          >
            <span
              className={`w-6 h-6 rounded-lg flex items-center justify-center bg-linear-to-br ${GRADIENTS[i % GRADIENTS.length]} shrink-0`}
            >
              <span className="text-white" style={{ transform: "scale(0.72)", display: "flex" }}>
                {ICON_MAP[s.icon]}
              </span>
            </span>
            {s.title}
          </button>
        ))}
      </motion.div>

      {/* Skill tags panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28 }}
          className="glass-card p-8 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div
            className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${GRADIENTS[activeTab % GRADIENTS.length]}`}
          />

          {/* Category header */}
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-11 h-11 rounded-xl flex items-center justify-center bg-linear-to-br ${GRADIENTS[activeTab % GRADIENTS.length]} text-white shadow-lg shrink-0`}
            >
              {ICON_MAP[cat.icon]}
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">{cat.title}</h3>
              <p className="text-white/35 text-xs">{cat.items.length} technologies</p>
            </div>
          </div>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2.5">
            {cat.items.map((item, j) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: j * 0.03 }}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
