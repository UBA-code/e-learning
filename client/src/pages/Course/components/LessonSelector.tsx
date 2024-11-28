import { PiClock } from "react-icons/pi";
import { motion } from "framer-motion";
import { useCourseStore } from "../store/useCourseStore";

export interface LessonSelectorProps {
  title: string;
  lessonNumber: string;
  time: string;
  lessonId: number;
  lessonPath: string;
}
export function LessonSelector({
  title,
  lessonNumber,
  time,
  lessonId,
  lessonPath,
}: LessonSelectorProps) {
  const selectedLessonId = useCourseStore((state) => state.seletedLessonId);
  const setSelectedLessonId = useCourseStore(
    (state) => state.setSelectedLessonId
  );
  const setSelectedLessonPath = useCourseStore(
    (state) => state.setSelectedLessonPath
  );
  const isActive = selectedLessonId === lessonId;

  return (
    <motion.div
      className={`lesson-selector outline outline-gray-100 py-6 md:py-4 px-4 rounded-md cursor-pointer transition hover:shadow-lg
        w-full md:flex md:items-center md:justify-between
        ${isActive ? "outline " : ""}
  `}
      onClick={() => {
        setSelectedLessonId(lessonId);
        setSelectedLessonPath(lessonPath);
      }}
      style={{
        boxShadow: isActive ? "0 0 3px 5px hsl(var(--primary), 30%)" : "",
        outlineColor: isActive ? "hsl(var(--primary), 30%)" : "",
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="head">
        <div className="lesson-title text-lg mb-2">{title}</div>
        <div className="lesson-number text-gray-500 text-sm mb-8 md:mb-0">
          {lessonNumber}
        </div>
      </div>
      <div
        className={`time-long flex items-center gap-1 ${
          isActive ? "bg-orange-200/60" : "bg-gray-100/80"
        } w-fit p-2 rounded-md font-extralight`}
      >
        <span className="time-icon">
          <PiClock size={23} className="fill-gray-500" />
        </span>
        <span className="time-text text-sm">{time}</span>
      </div>
    </motion.div>
  );
}
