import useFetch from "@/hooks/userFetch";
import { courseApi } from "@/types/apiTypes";
import { Divider, Spinner } from "@nextui-org/react";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { CoursePreview } from "./components/CoursePreview";

export default function Courses() {
  const { data, isLoading } = useFetch<courseApi[]>(`/courses`);

  console.log(data);

  if (isLoading) {
    return (
      <div className="loader flex justify-center items-center">
        <Spinner
          className="mx-auto my-20"
          color="warning"
          aria-label="loading"
        />
      </div>
    );
  }
  return (
    <motion.div
      className="courses-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="head space-y-4">
        <div className="title text-3xl font-semibold text-primary-text leading-normal">
          Online Courses on Design and Development
        </div>
        <p className="text-gray-600 font-light">
          Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey.
        </p>
      </div>
      <Divider className="my-14" />
      <div className="courses my-4 space-y-4">
        {data?.map((course) => (
          <CoursePreview key={uuidv4()} course={course} />
        ))}
      </div>
    </motion.div>
  );
}
