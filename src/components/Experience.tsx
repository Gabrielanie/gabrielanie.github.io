import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { EXPERIENCE } from "@/lib/data";

const DOT_COLORS = ["var(--purple)", "var(--cyan)", "var(--pink)", "var(--amber)"];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 md:py-32 scroll-mt-20" style={{ borderTop: "1px solid var(--border)" }} ref={ref}>
      <div className="wrap">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <div className="eyebrow justify-center mb-4">Career journey</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Professional <span className="grad-text-b">Experience</span>
          </h2>
          <p className="text-white/40 text-sm">My career path &amp; key contributions</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-3 bottom-3 w-0.5" style={{ background: "linear-gradient(to bottom, var(--purple), var(--pink), transparent)" }} />

          <div className="space-y-8">
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex gap-6 items-start"
              >
                {/* Dot */}
                <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center z-10 text-white font-extrabold text-xs"
                  style={{ background: DOT_COLORS[i % DOT_COLORS.length], boxShadow: `0 0 18px ${DOT_COLORS[i % DOT_COLORS.length]}55`, fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {String(EXPERIENCE.length - i).padStart(2, "0")}
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl p-6 hover:-translate-y-0.5 transition-transform duration-200"
                  style={{ background: "var(--surface-1)", border: `1px solid ${DOT_COLORS[i % DOT_COLORS.length]}33` }}
                >
                  <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                    <div>
                      <h3 className="text-white font-bold text-base leading-snug" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {exp.role}
                      </h3>
                      <p className="font-semibold text-sm mt-0.5" style={{ color: DOT_COLORS[i % DOT_COLORS.length], fontFamily: "'Space Grotesk', sans-serif" }}>
                        {exp.company}
                      </p>
                      <p className="text-white/30 text-xs mt-0.5">{exp.location}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold shrink-0"
                      style={{ background: `${DOT_COLORS[i % DOT_COLORS.length]}18`, border: `1px solid ${DOT_COLORS[i % DOT_COLORS.length]}40`, color: DOT_COLORS[i % DOT_COLORS.length], fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-white/55 text-sm">
                        <span className="shrink-0 mt-1.5 text-xs" style={{ color: DOT_COLORS[i % DOT_COLORS.length] }}>◆</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
