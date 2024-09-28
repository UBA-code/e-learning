import Benefits from "./sections/Benefits";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import OurCourses from "./sections/OurCourses";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";

export default function Home() {
  return (
    <div className="home-container mt-10">
      <Hero />
      <Benefits />
      <OurCourses />
      <Testimonials />
      <Pricing />
      <FAQ />
    </div>
  );
}
