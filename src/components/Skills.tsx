"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Server, Smartphone, Cloud, ShoppingBag } from "lucide-react";
import { SKILLS } from "@/lib/data";

const ICON_MAP: Record<string, React.ReactNode> = {
  code: <Code2 size={22} />,
  server: <Server size={22} />,
  smartphone: <Smartphone size={22} />,
  cloud: <Cloud size={22} />,
  layout: <ShoppingBag size={22} />,
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

  return (
    <section
      id="skills"
      className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-primary"
      >
        Technical Skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.15 }}
        className="text-white/40 text-center mb-14 text-sm"
      >
        Tools &amp; technologies I work with daily
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS.map((cat, i) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card p-6 hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden"
          >
            {/* top accent line */}
            <div
              className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r ${GRADIENTS[i % GRADIENTS.length]} opacity-70`}
            />

            <div className="flex items-center gap-3 mb-5">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center bg-linear-to-br ${GRADIENTS[i % GRADIENTS.length]} text-white shadow-lg`}
              >
                {ICON_MAP[cat.icon]}
              </div>
              <h3 className="text-white font-semibold text-base">{cat.title}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-[0.75rem] font-medium text-white/70 hover:text-white transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
