import { v4 } from "uuid";
import { LessonSelector, LessonSelectorProps } from "./LessonSelector";

export interface LessonsSectionProps {
  title: string;
  lessons: LessonSelectorProps[];
  sectionNumber: string;
}

export function LessonsSection({
  title,
  lessons,
  sectionNumber,
}: LessonsSectionProps) {
  return (
    <div className="section-box bg-white rounded-xl px-6 py-8 w-full md:w-[calc((100%/2)-0.75rem)]">
      <div className="head space-y-4">
        <div className="index text-6xl font-semibold text-end">
          {sectionNumber}
        </div>
        <div className="title text-xl font-medium">{title}</div>
      </div>
      <div className="lessons-box mt-10 flex flex-wrap gap-6">
        {lessons.map((lesson) => (
          <LessonSelector
            key={v4()}
            title={lesson.title}
            lessonNumber={lesson.lessonNumber}
            time={lesson.time}
            lessonId={lesson.lessonId}
            lessonPath={lesson.lessonPath}
          />
        ))}
      </div>
    </div>
  );
}
