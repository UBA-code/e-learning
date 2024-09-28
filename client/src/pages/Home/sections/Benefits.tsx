import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";
import { motion } from "framer-motion";

//? icons
import { GoArrowUpRight } from "react-icons/go";

function BenefitsCard({
  number,
  title,
  textContent,
}: {
  number: string;
  title: string;
  textContent: string;
}) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, bounce: 0, delay: 0.3 }}
    >
      <Card className="p-4 rounded-lg shadow-sm space-y-6">
        <CardHeader className="text-5xl font-bold justify-end">
          {number}
        </CardHeader>
        <CardBody className="space-y-4">
          <div className="content-title text-xl font-medium">{title}</div>
          <div className="content-text text-sm text-gray-500">
            {textContent}
          </div>
        </CardBody>
        <CardFooter className="justify-end">
          <Button variant={"outline"} size={"icon"} className="size-14">
            <GoArrowUpRight className="text-primary" size={30} />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Benefits() {
  return (
    <div className="benefits-section my-14">
      <SectionHeader
        title="Benefits"
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
        buttonContent="View All"
      />
      <div className="benefits-container grid grid-cols-1 sm:grid-cols-3 gap-4 my-16">
        <BenefitsCard
          number="01"
          title="Flexible Learning Schedule"
          textContent="Fit your coursework around your existing commitments and obligations."
        />
        <BenefitsCard
          number="02"
          title="Expert Instruction"
          textContent="Learn from industry experts who have hands-on experience in design and development."
        />
        <BenefitsCard
          number="03"
          title="Diverse Course Offerings"
          textContent="Explore a wide range of design and development courses covering various topics."
        />
        <BenefitsCard
          number="04"
          title="Updated Curriculum"
          textContent="Access courses with up-to-date content reflecting the latest trends and industry practices."
        />
        <BenefitsCard
          number="05"
          title="Practical Projects and Assignments"
          textContent="Develop a portfolio showcasing your skills and abilities to potential employers."
        />
        <BenefitsCard
          number="06"
          title="Interactive Learning Environment"
          textContent="Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding."
        />
      </div>
    </div>
  );
}
