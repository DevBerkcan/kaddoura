import { Hero } from "@/components/sections/hero";
import { CarGallery } from "@/components/sections/car-gallery";
import { About } from "@/components/sections/about";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { PhotoGallery } from "@/components/sections/photo-gallery";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CarGallery />
      <About />
      <HowItWorks />
      <Services />
      <Team />
      <PhotoGallery />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}
