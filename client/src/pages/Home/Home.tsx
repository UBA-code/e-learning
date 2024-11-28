import Benefits from "./sections/Benefits";
import FAQ from "./sections/FAQ";
import Hero from "./sections/Hero";
import OurCourses from "./sections/OurCourses";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      className="home-container mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Benefits />
      <OurCourses />
      <Testimonials />
      <Pricing />
      <FAQ />
    </motion.div>
  );
}
