"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Sparkles, Github, Linkedin, Mail } from "lucide-react";

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
      className="min-h-screen flex flex-col justify-center relative px-4 pt-24 pb-16 scroll-mt-0"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">

          {/* LEFT — text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Section label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="section-label mb-5"
            >
              Portfolio 2025
            </motion.div>

            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium mb-6 self-start"
              style={{
                background: "rgba(102,126,234,0.1)",
                border: "1px solid rgba(102,126,234,0.22)",
                color: "#a78bfa",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available for new projects
              <Sparkles size={12} className="opacity-70" />
            </motion.div>

            {/* Name */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.92] tracking-tight mb-5 gradient-text-primary">
              Gabriel<br />Anie
            </h1>

            {/* Typewriter */}
            <div className="text-lg md:text-xl text-white/50 font-light mb-5 h-8 flex items-center">
              <span className="text-white/75">{displayed}</span>
              <span className="cursor-blink inline-block w-0.5 h-5 bg-[#667eea] ml-0.5 align-middle" />
            </div>

            {/* Description */}
            <p className="text-white/45 text-base max-w-md mb-8 leading-relaxed">
              Building performant, scalable web &amp; mobile applications with
              cutting-edge technologies and thoughtful user experiences.
            </p>

            {/* Social icons row */}
            <div className="flex items-center gap-2.5 mb-8">
              {[
                { href: "https://github.com/gabrielanie", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/gabriel-udoh-85974616b/", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:younganiel@gmail.com", icon: Mail, label: "Email" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
              <div className="w-px h-4 bg-white/10 mx-1" />
              <span className="text-white/25 text-xs font-medium">younganiel@gmail.com</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full font-semibold text-white text-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(102,126,234,.4)]"
                style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full font-semibold text-white/70 text-sm transition-all duration-300 hover:text-white hover:-translate-y-1 hover:border-[#667eea] hover:bg-white/5"
                style={{ border: "1px solid rgba(255,255,255,0.11)" }}
              >
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 mt-12 pt-8"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              {[
                { value: "7+", label: "Years Experience" },
                { value: "20+", label: "Projects Delivered" },
                { value: "15+", label: "Happy Clients" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold gradient-text-accent">{s.value}</div>
                  <div className="text-xs text-white/35 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — profile photo */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="flex justify-center items-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Photo container */}
              <div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden"
                style={{
                  border: "3px solid rgba(102,126,234,0.3)",
                  boxShadow:
                    "0 0 60px rgba(102,126,234,0.18), 0 0 120px rgba(118,75,162,0.10), inset 0 0 40px rgba(0,0,0,0.3)",
                }}
              >
                <Image
                  src="/assets/images/gabby.jpg"
                  alt="Gabriel Anie – Full Stack Developer"
                  fill
                  priority
                  className="object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80";
                  }}
                />
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(102,126,234,0.08) 0%, transparent 50%, rgba(118,75,162,0.1) 100%)",
                  }}
                />
              </div>

              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-4 px-4 py-2.5 rounded-2xl text-center"
                style={{
                  background: "rgba(8,8,8,0.92)",
                  border: "1px solid rgba(102,126,234,0.35)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="text-xl font-extrabold gradient-text-accent leading-none">7+</div>
                <div className="text-[0.6rem] text-white/45 leading-tight mt-0.5">Years<br />Exp.</div>
              </motion.div>

              {/* Floating tech badge */}
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
                className="absolute -top-2 -right-6 px-3.5 py-2 rounded-2xl"
                style={{
                  background: "rgba(8,8,8,0.92)",
                  border: "1px solid rgba(79,172,254,0.3)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="text-xs font-semibold text-white/85">Next.js 15</div>
                <div className="text-[0.62rem] text-white/40 mt-0.5">React Native</div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/25"
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}
