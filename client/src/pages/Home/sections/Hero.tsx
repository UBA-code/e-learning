import headLines from "@/assets/home/headLines.svg";
import lightIcon from "@/assets/home/lightIcon.svg";
import { Button } from "@/components/ui/button";
import CompanysSlider from "../components/CompanysSlider";
import HeroVideo from "../components/HeroVideo";

export default function Hero() {
  return (
    <div className="hero-section mt-[10vh]">
      <div
        className="head-box relative flex items-center space-x-5 bg-card
          py-4 px-6 rounded-lg border-1 border-gray-100 sm:w-[60vw] sm:mx-auto"
      >
        <div className="icon bg-primary-background p-3 rounded">
          <img className="size-7" src={lightIcon} alt="icon" />
        </div>
        <div className="content text-lg font-semibold">
          <span className="text-primary mr-1">Unlock</span> Your Creative
          Potential
        </div>
        <div className="decorator-icon absolute -top-4 sm:-top-6 -left-8 sm:-left-10">
          <img src={headLines} alt="decorator" />
        </div>
      </div>
      <div className="head-information text-center my-12 w-[95%] sm:w-[85%] mx-auto">
        <p className="text-primary-text text-3xl">
          with Online Design and Development Courses.
        </p>
        <p className="my-4 text-lg sm:text-sm">
          Learn from Industry Experts and Enhance Your Skills.
        </p>
      </div>
      <div className="head-buttons text-center space-x-4 my-14">
        <Button className="py-7 sm:px-8">Explore Courses</Button>
        <Button className="py-7 bg-white sm:px-8" variant={"outline"}>
          View Pricing
        </Button>
      </div>
      <CompanysSlider />
      <HeroVideo />
    </div>
  );
}
