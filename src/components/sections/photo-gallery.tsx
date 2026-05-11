"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

const PHOTOS = [
  { src: "/gallery-IMG_3234.jpg", alt: "Ausstellungsbereich von Autocenter Kaddoura in Wuppertal" },
  { src: "/gallery-IMG_3232.jpg", alt: "Fahrzeugauswahl im Autohaus Autocenter Kaddoura" },
  { src: "/gallery-IMG_3230.jpg", alt: "Gebrauchtwagen bei Autocenter Kaddoura in Wuppertal" },
];

export function PhotoGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  const prev = useCallback(() =>
    setLightbox((i) => (i !== null ? (i - 1 + PHOTOS.length) % PHOTOS.length : null)),
  []);

  const next = useCallback(() =>
    setLightbox((i) => (i !== null ? (i + 1) % PHOTOS.length : null)),
  []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close, prev, next]);

  return (
    <section className="py-28 px-6 sm:px-10 max-w-[1200px] mx-auto">
      <Reveal>
        <Eyebrow>Einblicke</Eyebrow>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className="font-display font-extrabold text-brand-tertiary mb-12"
          style={{ fontSize: "clamp(30px, 3.8vw, 44px)" }}
        >
          Unser{" "}
          <span className="text-brand-primary">Autohaus</span>
        </h2>
      </Reveal>

      {/* Bento grid: large left + two stacked right */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[240px]">
        {/* Large featured — spans 2 cols on mobile, 2 of 3 cols + 2 rows on desktop */}
        <Reveal delay={0} className="col-span-2 md:col-span-2 md:row-span-2">
          <GalleryItem photo={PHOTOS[0]} index={0} onOpen={setLightbox} tall />
        </Reveal>

        {/* Top right */}
        <Reveal delay={0.1}>
          <GalleryItem photo={PHOTOS[1]} index={1} onOpen={setLightbox} />
        </Reveal>

        {/* Bottom right */}
        <Reveal delay={0.18}>
          <GalleryItem photo={PHOTOS[2]} index={2} onOpen={setLightbox} />
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={close}
          >
            {/* Image */}
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl max-h-[85vh] aspect-[4/3]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={PHOTOS[lightbox].src}
                alt={PHOTOS[lightbox].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {/* Close */}
            <button
              onClick={close}
              aria-label="Schließen"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Vorheriges Bild"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Nächstes Bild"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={22} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {PHOTOS.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  aria-label={`Bild ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === lightbox ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryItem({
  photo,
  index,
  onOpen,
  tall = false,
}: {
  photo: { src: string; alt: string };
  index: number;
  onOpen: (i: number) => void;
  tall?: boolean;
}) {
  return (
    <button
      onClick={() => onOpen(index)}
      aria-label={`${photo.alt} vergrößern`}
      className={`group relative w-full rounded-2xl overflow-hidden border border-[var(--border)] shadow-sm ${
        tall ? "h-full min-h-[220px] md:min-h-[calc(440px+12px)]" : "h-full"
      }`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        sizes="(max-width: 768px) 50vw, 40vw"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-brand-primary/0 group-hover:bg-brand-primary/20 transition-colors duration-300 flex items-center justify-center">
        <ZoomIn
          size={28}
          className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
        />
      </div>
    </button>
  );
}
