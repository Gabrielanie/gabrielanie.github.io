import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";

const ROLES = ["Full Stack Developer", "React / Next.js Expert", "Mobile App Developer", "UI/UX Focused Coder"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIdx];
    let timer: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < full.length) {
      timer = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === full.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timer = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [displayed, deleting, roleIdx]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative pt-16">
      <div className="wrap w-full py-16 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1"
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
                style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.3)", color: "#22c55e", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                Available for new projects
              </span>
            </div>

            {/* Name */}
            <h1 className="leading-[0.95] mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              <span className="block text-white font-bold" style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)" }}>Gabriel</span>
              <span className="block font-extrabold grad-text-a" style={{ fontSize: "clamp(3.2rem, 8vw, 6rem)" }}>Anie</span>
            </h1>

            {/* Role typewriter */}
            <div className="mb-4 h-8 flex items-center">
              <span className="text-lg md:text-xl font-semibold" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Space Grotesk', sans-serif" }}>
                {displayed}<span className="cursor text-[var(--purple)]">|</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
              Building performant, scalable web &amp; mobile applications with cutting-edge technologies and thoughtful user experiences.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3 mb-8">
              {[
                { icon: Github, href: "https://github.com/gabrielanie", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/gabriel-udoh-85974616b/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:younganiel@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer" aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                >
                  <Icon size={16} />
                </a>
              ))}
              <span className="text-white/30 text-sm ml-1">younganiel@gmail.com</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button onClick={scrollToProjects} className="btn-primary">
                View My Work <ArrowRight size={15} />
              </button>
              <button onClick={scrollToContact} className="btn-outline">
                Get In Touch
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              {[
                { num: "7+", label: "Years Experience", color: "var(--purple)" },
                { num: "20+", label: "Projects Delivered", color: "var(--pink)" },
                { num: "15+", label: "Happy Clients", color: "var(--cyan)" },
              ].map(({ num, label, color }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-extrabold mb-0.5" style={{ color, fontFamily: "'Space Grotesk', sans-serif" }}>{num}</div>
                  <div className="text-xs text-white/40 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right column — Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="order-1 md:order-2 flex justify-center md:justify-end relative"
          >
            <div className="relative w-72 h-80 md:w-80 md:h-96 lg:w-96 lg:h-[440px]">
              {/* Gradient ring */}
              <div className="grad-ring w-full h-full">
                <div className="grad-ring-inner">
                  <img
                    src="/assets/images/gabby.jpg"
                    alt="Gabriel Anie"
                    className="w-full h-full object-cover"
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80";
                    }}
                  />
                </div>
              </div>

              {/* Floating badges */}
              <div className="float-1 absolute -top-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: "var(--surface-1)", border: "1px solid rgba(139,92,246,0.4)", color: "#c4b5fd", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 0 20px rgba(139,92,246,0.2)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--purple)" }} />
                Next.js 15
              </div>
              <div className="float-2 absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: "var(--surface-1)", border: "1px solid rgba(6,182,212,0.4)", color: "#67e8f9", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 0 20px rgba(6,182,212,0.2)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--cyan)" }} />
                React Native
              </div>
              <div className="float-3 absolute top-1/2 -right-8 flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold"
                style={{ background: "var(--surface-1)", border: "1px solid rgba(236,72,153,0.4)", color: "#f9a8d4", fontFamily: "'Space Grotesk', sans-serif", boxShadow: "0 0 20px rgba(236,72,153,0.2)" }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: "var(--pink)" }} />
                Node.js
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-white/20 text-xs tracking-widest uppercase" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-6"
          style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.6), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
