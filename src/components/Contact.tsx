import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, FileText, Linkedin, Github } from "lucide-react";

const LINKS = [
  { icon: Mail,     label: "Email Me",  sub: "younganiel@gmail.com",  href: "mailto:younganiel@gmail.com", color: "var(--purple)", bg: "rgba(139,92,246,0.15)", border: "rgba(139,92,246,0.4)" },
  { icon: Linkedin, label: "LinkedIn",  sub: "gabriel-udoh",          href: "https://www.linkedin.com/in/gabriel-udoh-85974616b/", color: "var(--cyan)", bg: "rgba(6,182,212,0.15)", border: "rgba(6,182,212,0.4)" },
  { icon: Github,   label: "GitHub",    sub: "gabrielanie",           href: "https://github.com/gabrielanie", color: "#fff", bg: "rgba(255,255,255,0.08)", border: "rgba(255,255,255,0.15)" },
  { icon: FileText, label: "Resume",    sub: "Download CV",           href: "/assets/Gabriel_Anietie_Udoh_CV_.docx", color: "var(--pink)", bg: "rgba(236,72,153,0.15)", border: "rgba(236,72,153,0.4)" },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="contact" className="py-24 md:py-32 scroll-mt-20" style={{ borderTop: "1px solid var(--border)" }} ref={ref}>
      <div className="wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="eyebrow justify-center mb-5">Get in touch</div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-5 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Let's Build<br /><span className="grad-text-a">Something Great</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            I'm currently available for freelance projects and full-time opportunities. Whether you need a complete web app, a mobile solution, or ongoing technical leadership — let's talk.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
          {LINKS.map(({ icon: Icon, label, sub, href, color, bg, border }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("mailto") || href.endsWith(".docx") ? undefined : "_blank"}
              rel="noreferrer"
              download={href.endsWith(".docx") ? true : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="flex items-center gap-4 p-5 rounded-2xl hover:-translate-y-1 transition-transform duration-300 group"
              style={{ background: "var(--surface-1)", border: `1px solid ${border}` }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: bg }}>
                <Icon size={20} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white font-bold text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{label}</div>
                <div className="text-white/40 text-xs mt-0.5 truncate">{sub}</div>
              </div>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 text-white/20 group-hover:text-white/60 transition-colors duration-300">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
