import React, { ReactElement } from "react";

//? icons
import { FaCrown } from "react-icons/fa";
import awardIcon from "@/assets/about-us/award-icon.svg";
import industryIcon from "@/assets/about-us/industry-icon.svg";
import { FaMasksTheater } from "react-icons/fa6";

function AchievementPiece({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactElement;
}) {
  return (
    <div className="achievement-piece bg-white p-8 rounded-lg space-y-2">
      <div className="icon p-3 bg-orange-100/50 w-fit rounded outline outline-1 outline-amber-200/80 mb-6">
        {icon}
      </div>
      <div className="title text-xl">{title}</div>
      <div className="description text-gray-600/80">{description}</div>
    </div>
  );
}

interface sectionProps {
  title: string;
  description: string;
  childs: {
    title: string;
    description: string;
    icon: ReactElement;
  }[];
}

export default function Achievements({
  title,
  description,
  childs,
}: sectionProps) {
  return (
    <div className="achievements mb-10">
      <div className="header space-y-4 my-10">
        <div className="title text-2xl">{title}</div>
        <div className="description leading-relaxed text-gray-600/80">
          {description}
        </div>
      </div>
      <div className="achievements-box grid md:grid-cols-2 gap-6">
        {childs.map((child, index) => (
          <AchievementPiece
            key={index}
            title={child.title}
            description={child.description}
            icon={child.icon}
          />
        ))}
      </div>
    </div>
  );
}
