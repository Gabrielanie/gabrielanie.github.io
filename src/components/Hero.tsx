"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "React Native Developer",
  "TypeScript Enthusiast",
  "UI/UX Focused Coder",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((i) => (i + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative px-4 pt-20 scroll-mt-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl w-full"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
          style={{
            background: "rgba(102,126,234,0.12)",
            border: "1px solid rgba(102,126,234,0.25)",
            color: "#a78bfa",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new projects
          <Sparkles size={14} className="opacity-70" />
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 gradient-text-primary">
          Gabriel Anie
        </h1>

        {/* Typewriter */}
        <div className="text-xl md:text-2xl text-white/50 font-light mb-6 h-10 flex items-center justify-center">
          <span className="text-white/80">{displayed}</span>
          <span className="cursor-blink inline-block w-0.5 h-6 bg-[#667eea] ml-0.5 align-middle" />
        </div>

        {/* Description */}
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Building performant, scalable web &amp; mobile applications with cutting-edge
          technologies and thoughtful user experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,.4)]"
            style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-semibold text-white/80 transition-all duration-300 hover:text-white hover:-translate-y-1 hover:border-[#667eea] hover:bg-white/5"
            style={{
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-8 md:gap-14 justify-center mt-16 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "7+", label: "Years Experience" },
            { value: "20+", label: "Projects Delivered" },
            { value: "15+", label: "Happy Clients" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold gradient-text-accent">{s.value}</div>
              <div className="text-xs text-white/40 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
