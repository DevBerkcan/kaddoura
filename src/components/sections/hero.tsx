"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight, Star } from "lucide-react";
import { ParticleCanvas } from "@/components/three/particle-canvas";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { useCounter } from "@/hooks/use-counter";
import { SITE, IMAGES, STATS } from "@/lib/constants";

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)", scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

function AnimatedStat({
  end,
  suffix,
  label,
}: {
  end: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const value = useCounter(end, 2000, isInView);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl font-extrabold text-brand-tertiary dark:text-white leading-none">
        {value}
        <span className="text-xl text-brand-primary/80 dark:text-white/50">{suffix}</span>
      </div>
      <div className="font-body text-[11px] font-medium text-brand-neutral/70 dark:text-white/50 tracking-wide uppercase mt-1.5">
        {label}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f0f4f8] via-[#e8eef4] to-[#f5f7fa] text-[var(--text-body)] dark:bg-gradient-to-br dark:from-brand-primary dark:via-brand-primary-dark dark:to-[#000a18] dark:text-white">
      <ParticleCanvas />

      {/* Volvo XC90 — large, right-aligned */}
      <motion.div
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-[-8%] bottom-[-5%] w-[65%] h-[85%] z-[1]"
      >
        <Image
          src={IMAGES.heroCar}
          alt="Volvo XC90"
          fill
          priority
          className="object-contain object-right-bottom"
          sizes="65vw"
        />
        {/* Left fade so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#e8eef4] via-[#e8eef4]/40 to-transparent dark:from-brand-primary dark:via-brand-primary/50 dark:to-transparent pointer-events-none" />
        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f0f4f8]/80 dark:from-brand-primary-dark to-transparent pointer-events-none" />
      </motion.div>

      {/* Decorative circles */}
      <div className="absolute top-[8%] right-[10%] w-[450px] h-[450px] border border-brand-primary/10 rounded-full dark:border-white/[0.03]" />
      <div className="absolute bottom-[-15%] left-[-8%] w-[600px] h-[600px] border border-brand-primary/10 rounded-full dark:border-white/[0.02]" />

      {/* Bottom fade to page bg */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#f0f4f8] dark:from-[#000a18] to-transparent z-[3]" />

      {/* Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-[4] max-w-[1200px] mx-auto px-6 sm:px-10 w-full pt-36 pb-24"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>Ihr Partner für hochwertige Gebrauchtwagen in Wuppertal</Eyebrow>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-brand-tertiary leading-[1.02] mt-2 max-w-[700px] dark:text-white"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          Qualität, die
          <br />
          <span className="text-brand-primary/90 dark:text-white/60">Vertrauen </span>
          <span className="bg-gradient-to-r from-brand-tertiary to-brand-primary/60 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-[#7eb8e0]">
            schafft.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="font-body text-[var(--text-muted)] max-w-[480px] leading-relaxed mt-7 mb-9 dark:text-white/70"
          style={{ fontSize: "clamp(15px, 1.6vw, 17px)" }}
        >
          {SITE.description}
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-3.5 flex-wrap">
          <MagneticButton href="/fahrzeuge" variant="inverted">
            Fahrzeuge entdecken <ArrowRight size={15} />
          </MagneticButton>
          <MagneticButton href="#kontakt" variant="ghost">
            Probefahrt / Termin vereinbaren
          </MagneticButton>
        </motion.div>

        {/* Rating badges */}
        <motion.div variants={fadeUp} className="flex gap-4 mt-9 flex-wrap">
          {[
            { rating: "4.5/5", platform: "Google", sub: "320+ Bewertungen" },
            { rating: "4.5/5", platform: "Mobile.de", sub: "Top Händler" },
          ].map((badge) => (
            <div
              key={badge.platform}
              className="flex items-center gap-2.5 px-4 py-2.5 bg-white/[0.18] rounded-lg border border-[var(--border)] backdrop-blur-sm dark:bg-white/[0.06]"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={12}
                    fill={i <= 4 ? "#FFD166" : "transparent"}
                    color="#FFD166"
                  />
                ))}
              </div>
              <div>
                <div className="font-display text-[13px] font-bold text-brand-tertiary dark:text-white">
                  {badge.rating}{" "}
                  <span className="font-normal text-brand-neutral/70 dark:text-white/60">
                    auf {badge.platform}
                  </span>
                </div>
                <div className="font-body text-[10px] text-brand-neutral/70 dark:text-white/60">
                  {badge.sub}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Animated counters */}
        <motion.div variants={fadeUp} className="flex gap-12 mt-12">
          {STATS.map((stat) => (
            <AnimatedStat
              key={stat.label}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[4] flex flex-col items-center gap-1.5 animate-bobble"
      >
        <span className="font-body text-[10px] font-medium tracking-[0.15em] uppercase text-brand-neutral/60 dark:text-white/40">
          Entdecken
        </span>
        <ChevronDown size={16} className="text-brand-neutral/50 dark:text-white/30" />
      </motion.div>
    </section>
  );
}
