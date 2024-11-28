import { Divider } from "@nextui-org/react";
import React from "react";
import Achievements from "./components/Achievements";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

//? icons
import { FaCrown } from "react-icons/fa";
import awardIcon from "@/assets/about-us/award-icon.svg";
import industryIcon from "@/assets/about-us/industry-icon.svg";
import { FaMasksTheater } from "react-icons/fa6";
import bagIcon from "@/assets/about-us/bag-icon.svg";
import bookIcon from "@/assets/about-us/book-icon.svg";
import puzzleIcon from "@/assets/about-us/puzzle-icon.svg";
import alarmIcon from "@/assets/about-us/alarm-icon.svg";
import effectImg from "@/assets/about-us/footer-effect.svg";

export default function AboutUs() {
  return (
    <motion.div
      className="about-us"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header flex flex-col gap-6">
        <h1 className="title text-3xl font-medium">About Skillbridge</h1>
        <p className="description text-gray-600 font-light leading-relaxed">
          Welcome to our platform, where we are passionate about empowering
          individuals to master the world of design and development. We offer a
          wide range of online courses designed to equip learners with the
          skills and knowledge needed to succeed in the ever-evolving digital
          landscape.
        </p>
      </div>
      <Divider className="my-10" />
      <Achievements
        title="Achievements"
        description="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
        childs={[
          {
            title: "Trusted by Thousands",
            description:
              "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals.",
            icon: <FaCrown className="fill-primary " size={25} />,
          },
          {
            title: "Award-Winning Platform",
            description:
              "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies.",
            icon: <img src={awardIcon} alt="award-icon" />,
          },
          {
            title: "Positive Student Feedback",
            description:
              "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials.",
            icon: <FaMasksTheater className="fill-primary " size={25} />,
          },
          {
            title: "Industry Partnerships",
            description:
              "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies",
            icon: <img className="w-5" src={industryIcon} alt="award icon" />,
          },
        ]}
      />
      <Achievements
        title="Our Goals"
        description={`At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact. Through our carefully crafted courses, we aim to`}
        childs={[
          {
            title: "Provide Practical Skills",
            description:
              "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field.",
            icon: <img src={bagIcon} alt="award-icon" />,
          },
          {
            title: "Foster Creative Problem-Solving",
            description:
              "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation.",
            icon: <img src={bookIcon} alt="award-icon" />,
          },
          {
            title: "Promote Collaboration and Community",
            description:
              "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together.",
            icon: <img src={puzzleIcon} alt="award-icon" />,
          },
          {
            title: "Stay Ahead of the Curve",
            description:
              "The digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills.",
            icon: <img src={alarmIcon} alt="award icon" />,
          },
        ]}
      />
      <div className="join-now-section bg-white my-10 p-8 py-12 rounded-lg flex flex-col lg:flex-row lg:items-center lg:justify-between items-start gap-12 relative overflow-hidden">
        <div className="info space-y-4">
          <div className="title text-3xl font-medium leading-10 lg:max-w-[80%]">
            <span className="text-primary">Together</span>, let's shape the
            future of digital innovation
          </div>
          <div className="description text-gray-600">
            Join us on this exciting journey and unlock your potential in design
            and development.
          </div>
        </div>
        <Button className="p-6 text-base z-50">Join Now</Button>
        <div
          className="effect absolute w-56 -bottom-[5rem] -right-10
          lg:w-72 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-56
        "
        >
          <img src={effectImg} alt="footer effect" />
        </div>
      </div>
    </motion.div>
  );
}
