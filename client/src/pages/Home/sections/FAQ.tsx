import SectionHeader from "@/components/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, Divider } from "@nextui-org/react";

//? icons
import { RiArrowRightLine } from "react-icons/ri";

interface FaqItemProps {
  title: string;
  description: string;
  hasLink?: boolean;
}

function FaqItem({ title, description, hasLink }: FaqItemProps) {
  return (
    <AccordionItem
      value={title}
      className="outline outline-gray-100 rounded-lg px-6 py-2"
    >
      <AccordionTrigger className="font-normal">{title}</AccordionTrigger>
      <AccordionContent>
        <Divider className="my-4" />
        <p className=" text-base font-light md:my-10">{description}</p>
        {hasLink ? (
          <div className="link flex items-center justify-between gap-4 bg-background my-4 p-4 rounded-md border border-gray-200/50 transition hover:brightness-95 cursor-pointer">
            <p className="text-base">
              Enrollment Process for Different Courses
            </p>
            <Button isIconOnly className="rounded-full">
              <RiArrowRightLine
                size={40}
                className="font-bold bg-white rounded-full p-2"
              />
            </Button>
          </div>
        ) : (
          ""
        )}
      </AccordionContent>
    </AccordionItem>
  );
}

export default function FAQ() {
  return (
    <div className="faq-box flex flex-col md:flex-row md:gap-10 bg-white my-10 py-10 px-6 md:py-20 md:px-16 rounded-xl">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Still you have any questions? Contact our Team via
          support@skillbridge.com"
        buttonContent="See all FAQ's"
        decoration="column"
      />
      <Accordion
        type="single"
        collapsible
        className="my-10 md:my-0 space-y-4 md:w-[90%]"
      >
        <FaqItem
          title="Can I enroll in multiple courses at once?"
          description="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
          hasLink
        />
        <FaqItem
          title="What kind of support can I expect from instructors?"
          description="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        />
        <FaqItem
          title="Are the courses self-paced or do they have specific start and end dates?"
          description="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
          hasLink
        />
        <FaqItem
          title="Are there any prerequisites for the courses?"
          description="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        />
        <FaqItem
          title="Can I download the course materials for offline access?"
          description="Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
        />
      </Accordion>
    </div>
  );
}
