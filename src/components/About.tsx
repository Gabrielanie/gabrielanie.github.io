import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Briefcase, Sparkles, Download } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 scroll-mt-20"
      style={{ borderTop: "1px solid var(--border)" }}
      ref={ref}
    >
      <div className="wrap">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/5", maxWidth: "400px", margin: "0 auto" }}>
              <img
                src="/assets/images/gabby.jpg"
                alt="Gabriel Anie"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80";
                }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(5,5,5,0.7) 0%, transparent 60%)" }} />
              {/* Name badge at bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="px-4 py-3 rounded-xl" style={{ background: "rgba(5,5,5,0.85)", border: "1px solid var(--border)", backdropFilter: "blur(12px)" }}>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Gabriel Anie</div>
                  <div className="text-xs mt-0.5 grad-text-a font-semibold">Senior Full Stack Developer</div>
                </div>
              </div>
            </div>
            {/* Decorative gradient square */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10 opacity-60"
              style={{ background: "var(--grad-a)" }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="eyebrow mb-4">Get to know me</div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              I Build Things<br />
              <span className="grad-text-a">That Matter</span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-white/60 leading-relaxed">
                Hello! I'm <span className="text-white font-semibold">Gabriel Anie</span>, a passionate Full Stack Developer specialising in building scalable web and mobile applications. I combine clean architecture with intuitive UI/UX to deliver products users love.
              </p>
              <p className="text-white/60 leading-relaxed">
                With 7+ years of industry experience I've shipped everything from WooCommerce storefronts to Next.js 15 SaaS dashboards and React Native cross-platform apps. I believe in writing maintainable, type-safe code and staying current with emerging technologies.
              </p>
              <p className="text-white/60 leading-relaxed">
                Outside of work, I contribute to open-source projects, mentor junior developers, and explore the latest in web performance and developer tooling.
              </p>
            </div>

            {/* Info pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: MapPin, label: "Nigeria (Remote)", color: "var(--purple)", bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.3)" },
                { icon: Briefcase, label: "Senior Full Stack Dev", color: "var(--cyan)", bg: "rgba(6,182,212,0.1)", border: "rgba(6,182,212,0.3)" },
                { icon: Sparkles, label: "Available for hire", color: "var(--green)", bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)" },
              ].map(({ icon: Icon, label, color, bg, border }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
                  style={{ background: bg, border: `1px solid ${border}`, color }}
                >
                  <Icon size={14} />
                  {label}
                </div>
              ))}
            </div>

            <a
              href="/assets/Gabriel_Anietie_Udoh_CV_.docx"
              download
              className="btn-primary"
            >
              <Download size={15} /> Download Resume
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
