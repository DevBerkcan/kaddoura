"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";
import { CAR_HIGHLIGHTS } from "@/lib/constants";

const INTERVAL = 4000;

export function CarGallery() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPaused = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const child = track.children[index] as HTMLElement;
    if (!child) return;
    track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
    setActive(index);
  }, []);

  const advance = useCallback(() => {
    setActive((prev) => {
      const next = (prev + 1) % CAR_HIGHLIGHTS.length;
      const track = trackRef.current;
      if (track) {
        const child = track.children[next] as HTMLElement;
        if (child) track.scrollTo({ left: child.offsetLeft, behavior: "smooth" });
      }
      return next;
    });
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isPaused.current) advance();
    }, INTERVAL);
  }, [advance]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const goTo = (index: number) => {
    scrollToIndex(index);
    startTimer();
  };

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const scrollLeft = track.scrollLeft;
    let closest = 0;
    let minDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const dist = Math.abs((child as HTMLElement).offsetLeft - scrollLeft);
      if (dist < minDist) { minDist = dist; closest = i; }
    });
    setActive(closest);
  }, []);

  return (
    <section
      className="py-20"
      onMouseEnter={() => { isPaused.current = true; }}
      onMouseLeave={() => { isPaused.current = false; }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10 mb-10">
        <Reveal><Eyebrow>Unsere Fahrzeuge</Eyebrow></Reveal>

        <div className="flex items-end justify-between gap-4 flex-wrap mt-2">
          <Reveal delay={0.08}>
            <h2
              className="font-display font-extrabold text-brand-tertiary"
              style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
            >
              Aktuelle{" "}
              <span className="text-brand-primary">Highlights</span>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex items-center gap-3">
              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  onClick={() => goTo(Math.max(0, active - 1))}
                  disabled={active === 0}
                  aria-label="Vorheriges Fahrzeug"
                  className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-brand-tertiary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => goTo(Math.min(CAR_HIGHLIGHTS.length - 1, active + 1))}
                  disabled={active === CAR_HIGHLIGHTS.length - 1}
                  aria-label="Nächstes Fahrzeug"
                  className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-brand-tertiary hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <Link
                href="/fahrzeuge"
                className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-primary hover:gap-3 transition-all duration-300"
              >
                Alle Fahrzeuge <ArrowRight size={15} />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scrollable track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex gap-4 px-6 sm:px-10 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide max-w-[1200px] mx-auto"
      >
        {CAR_HIGHLIGHTS.map((car) => (
          <Link
            key={car.src}
            href="/fahrzeuge"
            className="group flex-shrink-0 w-72 sm:w-80 snap-start rounded-2xl overflow-hidden border border-[var(--border)] bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 block"
          >
            <div className="relative h-52 bg-[#f5f5f7]">
              <Image
                src={car.src}
                alt={car.model}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                sizes="320px"
              />
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <div className="font-display text-[15px] font-bold text-brand-tertiary">
                  {car.model}
                </div>
                <div className="font-body text-xs text-brand-neutral mt-0.5">
                  Jetzt verfügbar
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-brand-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Dot indicators + progress */}
      <div className="flex justify-center items-center gap-2.5 mt-7">
        {CAR_HIGHLIGHTS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Fahrzeug ${i + 1}`}
            className={`relative h-2 rounded-full transition-all duration-500 overflow-hidden ${
              i === active
                ? "w-8 bg-brand-primary/20"
                : "w-2 bg-brand-neutral/20 hover:bg-brand-neutral/40"
            }`}
          >
            {i === active && (
              <span
                className="absolute inset-y-0 left-0 bg-brand-primary rounded-full animate-[progress_4s_linear_forwards]"
                style={{ width: "100%" }}
              />
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
