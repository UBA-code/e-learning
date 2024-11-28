import SectionHeader from "@/components/SectionHeader";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Spinner,
} from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import useFetch from "@/hooks/userFetch";
import { courseApi } from "@/types/apiTypes";
import { v4 as uuid4 } from "uuid";

interface OurCoursesCardProps {
  data: courseApi;
}

export function OurCoursesCard({ data }: OurCoursesCardProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, bounce: 0, delay: 0.3 }}
    >
      <Card className="p-4 sm:p-8 h-full">
        <CardHeader className="flex-col space-y-6">
          <div
            className={`img bg-cover bg-center w-full h-[200px] sm:h-[300px] rounded-lg`}
            style={{
              backgroundImage: `url(${import.meta.env.VITE_API_URL}/${
                data?.images[0]
              })`,
            }}
          ></div>
          <div
            className="header-description self-start flex w-full flex-col lg:items-center
              lg:flex-row lg:justify-between space-y-6 lg:space-y-0"
          >
            <div className="tags flex flex-wrap gap-4">
              {data.tags.map((tag) => (
                <span
                  className="text-sm font-light border-1 rounded px-3 py-2"
                  key={uuid4()}
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <div className="autor">By {data.author.name}</div>
          </div>
        </CardHeader>
        <CardBody className="space-y-3">
          <div className="title text-xl font-medium">{data.name}</div>
          <div className="content font-extralight">
            {data.description.slice(0, 200)}...
          </div>
        </CardBody>
        <CardFooter>
          <Button
            variant={"outline"}
            className="bg-[#F7F7F8] w-full py-6 font-normal border-gray-100"
          >
            Get It Now
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function OurCourses() {
  const { data, isLoading } = useFetch<courseApi[]>("/courses/selected");

  console.log(data);

  return (
    <div className="our-courses-section">
      <SectionHeader
        title="Our Courses"
        description="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        buttonContent="View All"
      />
      {isLoading ? (
        <div className="mx-auto my-20 text-center space-y-4">
          <h1>Loading courses</h1>
          <Spinner size="lg" className="mx-auto" aria-label="loading" />
        </div>
      ) : (
        <motion.div
          className="cards-box my-10 grid grid-cols-1 gap-6 sm:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data?.map((course) => (
            <OurCoursesCard key={uuid4()} data={course} />
          ))}
        </motion.div>
      )}
    </div>
  );
}
