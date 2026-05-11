import { Hero } from "@/components/sections/hero";
import { CarGallery } from "@/components/sections/car-gallery";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Team } from "@/components/sections/team";
import { Reviews } from "@/components/sections/reviews";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <CarGallery />
      <About />
      <Services />
      <Team />
      <Reviews />
      <FAQ />
      <Contact />
    </>
  );
}
