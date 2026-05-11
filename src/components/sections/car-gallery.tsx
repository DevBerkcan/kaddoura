"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, Calendar, Fuel, Zap } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/ui/eyebrow";

type Car = {
  id: number;
  name: string;
  meta: string;
  price: number | null;
  mileage: number;
  year: string;
  fuel: string;
  ps: number;
  state: string;
  image: string | null;
  href: string;
};

const PREVIEW = 6;

function fmt(n: number) {
  return n.toLocaleString("de-DE");
}

function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-white animate-pulse">
      <div className="h-48 bg-brand-secondary/40" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-brand-secondary/50 rounded w-2/3" />
        <div className="h-3 bg-brand-secondary/40 rounded w-full" />
        <div className="flex gap-3 pt-1">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-3 bg-brand-secondary/40 rounded w-12" />
          ))}
        </div>
        <div className="h-5 bg-brand-secondary/50 rounded w-1/3 mt-2" />
      </div>
    </div>
  );
}

export function CarGallery() {
  const [cars, setCars] = useState<Car[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/cars")
      .then((r) => r.json())
      .then(({ cars, total }) => {
        setCars(cars ?? []);
        setTotal(total ?? 0);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 max-w-[1200px] mx-auto px-6 sm:px-10">
      <Reveal>
        <Eyebrow>Unsere Fahrzeuge</Eyebrow>
      </Reveal>

      <div className="flex items-end justify-between gap-4 flex-wrap mt-2 mb-10">
        <Reveal delay={0.08}>
          <h2
            className="font-display font-extrabold text-brand-tertiary"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
          >
            Aktuelle{" "}
            <span className="text-brand-primary">Highlights</span>
          </h2>
        </Reveal>

        {!loading && total > PREVIEW && (
          <Reveal delay={0.14}>
            <Link
              href="/fahrzeuge"
              className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-primary hover:gap-3 transition-all duration-300"
            >
              Alle {total} Fahrzeuge <ArrowRight size={15} />
            </Link>
          </Reveal>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {loading
          ? Array.from({ length: PREVIEW }).map((_, i) => <SkeletonCard key={i} />)
          : cars.slice(0, PREVIEW).map((car, i) => (
              <Reveal key={car.id} delay={i * 0.07}>
                <Link
                  href={car.href}
                  className="group block rounded-2xl overflow-hidden border border-[var(--border)] bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-brand-secondary/30 overflow-hidden">
                    {car.image ? (
                      <Image
                        src={car.image}
                        alt={`${car.name} Gebrauchtwagen bei Autocenter Kaddoura in Wuppertal`}
                        fill
                        className="object-cover group-hover:scale-[1.04] transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-brand-neutral/30">
                        <Zap size={40} />
                      </div>
                    )}
                    {/* State badge */}
                    <div className="absolute top-3 left-3">
                      <span className="font-body text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-brand-primary border border-brand-primary/20">
                        {car.state}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5">
                    <div className="font-display text-[16px] font-bold text-brand-tertiary leading-snug">
                      {car.name}
                    </div>
                    <div className="font-body text-[12px] text-brand-neutral mt-0.5 truncate">
                      {car.meta}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3">
                      <span className="flex items-center gap-1 font-body text-[12px] text-brand-neutral/80">
                        <Gauge size={12} className="text-brand-primary/60" />
                        {fmt(car.mileage)} km
                      </span>
                      <span className="flex items-center gap-1 font-body text-[12px] text-brand-neutral/80">
                        <Calendar size={12} className="text-brand-primary/60" />
                        {car.year}
                      </span>
                      <span className="flex items-center gap-1 font-body text-[12px] text-brand-neutral/80">
                        <Fuel size={12} className="text-brand-primary/60" />
                        {car.fuel}
                      </span>
                      <span className="flex items-center gap-1 font-body text-[12px] text-brand-neutral/80">
                        <Zap size={12} className="text-brand-primary/60" />
                        {car.ps} PS
                      </span>
                    </div>

                    {/* Price + arrow */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="font-display text-[20px] font-extrabold text-brand-tertiary">
                        {car.price != null
                          ? `${fmt(car.price)} €`
                          : "Preis auf Anfrage"}
                      </div>
                      <ArrowRight
                        size={18}
                        className="text-brand-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
      </div>

      {/* CTA */}
      {!loading && total > PREVIEW && (
        <Reveal delay={0.2}>
          <div className="mt-10 text-center">
            <Link
              href="/fahrzeuge"
              className="inline-flex items-center gap-2 font-display text-sm font-bold px-6 py-3 rounded-full border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              Alle {total} Fahrzeuge ansehen <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
      )}
    </section>
  );
}
