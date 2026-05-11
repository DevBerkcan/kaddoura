import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { CarShowroom } from "@/components/sections/car-showroom";

export const metadata: Metadata = {
  title: "Fahrzeugdetail",
  description: `Fahrzeugdetails bei ${SITE.name} in Wuppertal.`,
  robots: { index: false },
};

export default function FahrzeugDetailPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-brand-primary dark:to-brand-primary-dark pt-28 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-10">
        <CarShowroom />
      </div>
    </main>
  );
}
