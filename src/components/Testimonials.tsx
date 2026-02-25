"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";

export default function Testimonials() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section
      className="py-24 px-4 max-w-6xl mx-auto"
      ref={ref}
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="text-4xl md:text-5xl font-bold text-center mb-4 gradient-text-primary"
      >
        Client Testimonials
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.1 }}
        className="text-white/40 text-center mb-14 text-sm"
      >
        What clients say about working with me
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="glass-card p-6 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
          >
            <Quote size={24} className="text-[#667eea] opacity-60" />
            <p className="text-white/60 text-sm leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              <div className="w-10 h-10 rounded-full overflow-hidden relative flex-shrink-0">
                <Image src={t.avatar} alt={t.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{t.name}</div>
                <div className="text-xs text-white/40">{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
