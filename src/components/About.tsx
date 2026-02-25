"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap, Download } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto scroll-mt-24" ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text-secondary"
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-sm mx-auto md:mx-0">
            <Image
              src="/assets/images/gabby.jpg"
              alt="Gabriel Anie"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80";
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg,rgba(102,126,234,.15),transparent)",
              }}
            />
          </div>

          {/* Stats row — contained below image, no overflow */}
          <div className="flex gap-3 mt-5 max-w-sm mx-auto md:mx-0">
            {[
              { value: "7+", label: "Yrs Experience" },
              { value: "20+", label: "Projects" },
              { value: "15+", label: "Clients" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex-1 text-center rounded-xl py-3"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="text-xl font-extrabold gradient-text-accent">{s.value}</div>
                <div className="text-[0.65rem] text-white/40 mt-0.5 leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Content column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          <p className="text-white/60 text-base leading-relaxed">
            Hello! I&apos;m <span className="text-white font-semibold">Gabriel Anie</span>, a
            passionate Full Stack Developer specialising in building scalable web and mobile
            applications. I combine clean architecture with intuitive UI/UX to deliver products
            users love.
          </p>
          <p className="text-white/60 text-base leading-relaxed">
            With 7+ years of industry experience I&apos;ve shipped everything from WooCommerce
            storefronts to Next.js 15 SaaS dashboards and React Native cross-platform apps. I
            believe in writing maintainable, type-safe code and stay current with emerging
            technologies.
          </p>
          <p className="text-white/60 text-base leading-relaxed">
            Outside of work, I contribute to open-source projects, mentor junior developers, and
            explore the latest in web performance and developer tooling.
          </p>

          {/* Meta info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {[
              { icon: MapPin, label: "Location", value: "Nigeria (Remote)" },
              { icon: Briefcase, label: "Current Role", value: "Senior Full Stack Dev" },
              { icon: GraduationCap, label: "Status", value: "Available for hire" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <Icon size={16} className="text-[#667eea] flex-shrink-0" />
                <div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wide">{label}</div>
                  <div className="text-sm text-white/80 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <a
            href="/assets/Gabriel_Anietie_Udoh_CV_.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(102,126,234,.35)] mt-2"
            style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
          >
            <Download size={16} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
