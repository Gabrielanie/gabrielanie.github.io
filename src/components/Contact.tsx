"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, FileText, MessageSquare, ExternalLink, GitBranch } from "lucide-react";

const LINKS = [
  {
    icon: Mail,
    label: "Email Me",
    sub: "younganiel@gmail.com",
    href: "mailto:younganiel@gmail.com",
    gradient: "from-[#667eea] to-[#764ba2]",
  },
  {
    icon: ExternalLink,
    label: "LinkedIn",
    sub: "gabriel-udoh",
    href: "https://www.linkedin.com/in/gabriel-udoh-85974616b/",
    gradient: "from-[#0077b5] to-[#00a0dc]",
  },
  {
    icon: GitBranch,
    label: "GitHub",
    sub: "gabrielanie",
    href: "https://github.com/gabrielanie",
    gradient: "from-[#555] to-[#888]",
  },
  {
    icon: FileText,
    label: "Resume",
    sub: "Download CV",
    href: "/assets/Gabriel_Anietie_Udoh_CV_.docx",
    gradient: "from-[#f093fb] to-[#f5576c]",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="contact"
      className="py-28 px-4 max-w-4xl mx-auto scroll-mt-24"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="section-label justify-center mb-5"
        >
          Get in touch
        </motion.div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
          style={{
            background: "rgba(102,126,234,0.1)",
            border: "1px solid rgba(102,126,234,0.2)",
            color: "#a78bfa",
          }}
        >
          <MessageSquare size={14} />
          Let&apos;s Collaborate
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-5 gradient-text-secondary">
          Let&apos;s Work Together
        </h2>
        <p className="text-white/50 text-base md:text-lg mb-14 leading-relaxed max-w-2xl mx-auto">
          I&apos;m currently available for freelance projects and full-time opportunities. Whether
          you need a complete web app, a mobile solution, or ongoing technical leadership &mdash;
          let&apos;s talk.
        </p>
      </motion.div>

      {/* Contact cards */}
      <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {LINKS.map(({ icon: Icon, label, sub, href, gradient }, i) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("mailto") ? undefined : "_blank"}
            rel="noreferrer"
            download={href.endsWith(".docx") ? true : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
            className="glass-card flex items-center gap-4 p-5 hover:-translate-y-1 transition-transform duration-300 group"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 bg-linear-to-br ${gradient} shadow-lg`}
            >
              <Icon size={22} className="text-white" />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">{label}</div>
              <div className="text-white/40 text-xs mt-0.5">{sub}</div>
            </div>
            <div className="ml-auto text-white/20 group-hover:text-white/60 transition-colors duration-300">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
