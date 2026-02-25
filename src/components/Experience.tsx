"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 px-4 max-w-4xl mx-auto scroll-mt-24" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-accent"
      >
        Professional Experience
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1 }}
        className="text-white/40 text-center mb-16 text-sm"
      >
        My career journey &amp; key contributions
      </motion.p>

      {/* Timeline — dot column (w-10) centers on the line at left-5 */}
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[rgba(102,126,234,0.35)] to-transparent" />

        <div className="space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="flex gap-5 items-start"
            >
              {/* Dot — w-10 centres its midpoint at left-5 (1.25rem) matching the line */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 shadow-[0_0_18px_rgba(102,126,234,0.35)]"
                style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
              >
                <Briefcase size={15} className="text-white" />
              </div>

              {/* Card */}
              <div className="flex-1 glass-card p-6 hover:-translate-y-0.5 transition-transform duration-300">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-semibold text-[1rem] leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-[#667eea] text-sm mt-0.5 font-medium">{exp.company}</p>
                    <p className="text-white/30 text-xs mt-0.5">{exp.location}</p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium text-white/70 flex-shrink-0"
                    style={{
                      background: "rgba(102,126,234,0.1)",
                      border: "1px solid rgba(102,126,234,0.22)",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-white/55 text-sm">
                      <CheckCircle2 size={13} className="text-[#667eea] mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
