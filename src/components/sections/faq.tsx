"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { MagneticButton } from "@/components/motion/magnetic-button";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 px-6 sm:px-10 max-w-[800px] mx-auto">
      <Reveal><Eyebrow center>Häufige Fragen</Eyebrow></Reveal>
      <Reveal delay={0.08}>
        <h2
          className="font-display font-extrabold text-brand-tertiary text-center mb-12"
          style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
        >
          FAQ
        </h2>
      </Reveal>

      <div className="space-y-0">
        {FAQS.map((faq, i) => (
          <Reveal key={faq.question} delay={i * 0.04}>
            <div className="border-b border-[var(--border)]">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
                className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer group"
              >
                <span
                  className={`font-display text-[15px] font-semibold transition-colors duration-300 ${
                    openIndex === i
                      ? "text-brand-primary"
                      : "text-brand-tertiary group-hover:text-brand-primary"
                  }`}
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="text-brand-primary flex-shrink-0 ml-4"
                  aria-hidden="true"
                >
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm text-[var(--text-body)] leading-relaxed pb-5">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.4}>
        <div className="mt-10 text-center">
          <p className="font-body text-sm text-brand-neutral mb-4">
            Ihre Frage war nicht dabei?
          </p>
          <MagneticButton href="#kontakt" variant="secondary">
            Jetzt Kontakt aufnehmen
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
