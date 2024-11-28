import { courseApi } from "@/types/apiTypes";
import { Divider, Spinner } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { v4 as uuid } from "uuid";
import { LessonsSection } from "./components/LessonsSection";

import {
  Player,
  ControlBar,
  ReplayControl,
  ForwardControl,
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton,
  VolumeMenuButton,
} from "video-react";
import useFetch from "@/hooks/userFetch";
import { useEffect } from "react";
import { useCourseStore } from "./store/useCourseStore";

export default function Course() {
  const { id } = useParams<{ id: string }>();
  const { data: courseData, isLoading } = useFetch<courseApi>(`/courses/${id}`);
  const selectedVideo = useCourseStore((state) => state.selectedLessonPath);
  const setSelectedVideo = useCourseStore(
    (state) => state.setSelectedLessonPath
  );
  const setSelectedLessonId = useCourseStore(
    (state) => state.setSelectedLessonId
  );

  useEffect(() => {
    if (courseData && courseData.curriculm[0].videos?.[0].path) {
      setSelectedVideo(courseData.curriculm[0].videos?.[0].path);
      setSelectedLessonId(courseData.curriculm[0].videos?.[0].id);
    }
  }, [courseData]);

  if (isLoading)
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-[40vh]">
        <span className="text-primary">loading course ...</span>
        <Spinner color="primary" aria-label="Loading" />
      </div>
    );
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="course-container my-4"
    >
      <div className="head space-y-6">
        <div className="title text-3xl font-semibold">{courseData?.name}</div>
        <div className="description text-gray-600/80">
          {courseData?.description}
        </div>
      </div>
      <Divider className="my-10" />
      <div className="video-box w-full my-10 h-[calc(60vh)]">
        <Player
          key={selectedVideo}
          fluid={false}
          //@ts-expect-error it works
          width="100%"
          //@ts-expect-error it works
          height="100%"
        >
          <source src={`${import.meta.env.VITE_API_URL}/${selectedVideo}`} />
          <ControlBar>
            <ReplayControl seconds={10} />
            <ForwardControl seconds={10} order={1.2} />
            <CurrentTimeDisplay order={4.1} />
            <TimeDivider order={4.2} />
            <VolumeMenuButton vertical order={7.0} />
            <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
          </ControlBar>
        </Player>
      </div>
      <div className="lessons-sections flex flex-wrap gap-6">
        {courseData?.curriculm.map((section, index) => (
          <LessonsSection
            key={uuid()}
            title={section.name}
            sectionNumber={`${index < 9 ? "0" : ""}${index + 1}`}
            lessons={
              section.videos?.map((video, index) => {
                return {
                  title: video.title,
                  lessonNumber: `Lesson ${index + 1}`,
                  time: "1hr 30mins",
                  lessonId: video.id,
                  lessonPath: video.path,
                };
              }) || []
            }
          />
        ))}
      </div>
    </motion.div>
  );
}
