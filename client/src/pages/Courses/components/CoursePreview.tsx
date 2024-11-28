import { v4 as uuidv4 } from "uuid";
import { Divider } from "@nextui-org/react";
import { courseApi } from "@/types/apiTypes";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function CurriculumStep({
  stepNumber,
  stepContent,
}: {
  stepNumber: string;
  stepContent: string;
}) {
  return (
    <div className="step space-y-2 p-4">
      <div className="step-title text-4xl font-bold">{stepNumber}</div>
      <div className="step-content md:font-light">{stepContent}</div>
    </div>
  );
}

export function CoursePreview({ course }: { course: courseApi }) {
  const navigate = useNavigate();
  return (
    <div className="course space-y-6 bg-white px-6 py-8 rounded-lg">
      <div className="space-y-4 md:space-y-0 md:flex md:gap-4 md:items-center md:justify-between">
        <div className="title-description space-y-2">
          <div className="course-title text-xl font-semibold">
            {course.name}
          </div>
          <div className="course-description text-gray-500 leading-relaxed text-sm">
            {course.description}
          </div>
        </div>
        <Button
          variant={"outline"}
          className="py-6"
          onClick={() => navigate(`/courses/${course.id}`)}
        >
          View Course
        </Button>
      </div>
      <div
        className="course-images flex items-center justify-between gap-4
      "
      >
        {course.images.map((image) => (
          <div
            key={uuidv4()}
            className={`course-img w-[calc((100%/3)-0.6rem)] h-[100px] md:h-[300px]
            bg-center bg-cover rounded-md
        `}
            style={{
              backgroundImage: `url('${
                import.meta.env.VITE_API_URL
              }/${image}')`,
            }}
          ></div>
        ))}
      </div>
      <div className="tags-and-author space-y-4 md:space-y-0 md:flex md:justify-between py-4">
        <div className="tags [&>*]:border [&>*]:p-2 [&>*]:py-1 [&>*]:rounded-md [&>*]:text-gray-600 font-light space-x-2">
          {course.tags.map((tag) => (
            <span key={uuidv4()} className="tag">
              {tag.name}
            </span>
          ))}
        </div>
        <div className="author font-medium">By {course.author.name}</div>
      </div>
      <div className="curriculum border border-gray-200/70 rounded-lg">
        <div className="title font-semibold p-4">Curriculum</div>
        <Divider className="bg-gray-200/70" />
        <div className="steps p-4 md:flex md:gap-4 md:flex-wrap md:justify-around">
          {(() => {
            const steps = [];
            for (
              let i = 0, stepIndex = 0;
              i < course.curriculm.length * 2;
              i++, i % 2 === 0 ? stepIndex++ : ""
            ) {
              if (i !== course.curriculm.length * 2 - 1) {
                steps.push(
                  <div key={uuidv4()}>
                    {i % 2 === 0 && (
                      <CurriculumStep
                        stepNumber={`0${course.curriculm[stepIndex].index}`}
                        stepContent={course.curriculm[stepIndex].name}
                      />
                    )}
                    {i % 2 === 1 ? (
                      <Divider
                        orientation={
                          window.innerWidth <= 640 ? "horizontal" : "vertical"
                        }
                        className="bg-gray-200/70 my-6 md:my-0 md:md:h-[80px] ml-auto"
                      />
                    ) : (
                      ""
                    )}
                  </div>
                );
              }
            }
            return steps;
          })()}
        </div>
      </div>
    </div>
  );
}
