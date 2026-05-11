"use client";

import { Star, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { REVIEWS, SITE } from "@/lib/constants";

export function Reviews() {
  return (
    <section id="bewertungen" className="py-28 bg-white dark:bg-brand-primary overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <Reveal><Eyebrow center>Kundenstimmen</Eyebrow></Reveal>
        <Reveal delay={0.08}>
          <h2
            className="font-display font-extrabold text-brand-tertiary text-center mb-2 dark:text-white"
            style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
          >
            Was unsere Kunden sagen
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="flex justify-center items-center gap-1 mb-10">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                size={17}
                fill={i <= 4 ? "#FFD166" : "transparent"}
                color="#FFD166"
              />
            ))}
            <span className="font-body text-sm text-brand-neutral/70 ml-2.5 dark:text-white/60">
              4.5/5 auf Google (320+ Bewertungen)
            </span>
          </div>
        </Reveal>
      </div>

      {/* Horizontal scrolling reviews */}
      <div
        className="flex gap-4 overflow-x-auto px-6 sm:px-10 pb-5 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {REVIEWS.map((review, i) => (
          <Reveal
            key={review.name}
            delay={i * 0.06}
            className="min-w-[340px] max-w-[400px] flex-shrink-0 snap-start"
          >
            <div className="p-7 bg-[var(--surface)] rounded-2xl border border-[var(--border)] backdrop-blur-sm h-full flex flex-col dark:bg-white/[0.06] dark:border-white/[0.08]">
              <div className="flex gap-0.5 mb-3.5">
                {[1, 2, 3, 4, 5].map((j) => (
                  <Star key={j} size={13} fill="#FFD166" color="#FFD166" />
                ))}
              </div>
              <p className="font-body text-sm text-brand-neutral/80 leading-relaxed flex-1 mb-4 dark:text-white/80">
                „{review.text}"
              </p>
              <div className="flex justify-between items-center border-t border-[var(--border)] pt-3.5 dark:border-white/[0.06]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/[0.08] flex items-center justify-center font-display text-xs font-bold text-brand-primary dark:bg-white/10 dark:text-white/70">
                    {review.name.charAt(0)}
                  </div>
                  <span className="font-display text-sm font-bold text-brand-tertiary dark:text-white">
                    {review.name}
                  </span>
                </div>
                <span className="font-body text-[11px] text-brand-neutral/70 dark:text-white/60">
                  {review.time}
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 mt-8">
        <Reveal delay={0.3}>
          <div className="flex justify-center">
            <MagneticButton
              href={SITE.googleReviewsUrl}
              variant="ghost"
              target="_blank"
            >
              Alle Google Bewertungen lesen <ArrowUpRight size={14} />
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
