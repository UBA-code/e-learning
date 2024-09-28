import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { motion } from "framer-motion";

interface FeedBackCardProps {
  feedback: string;
  writerName: string;
  writerImg: string;
}

function FeedBackCard({ feedback, writerImg, writerName }: FeedBackCardProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, bounce: 0, delay: 0.3 }}
    >
      <Card className="rounded-md">
        <CardBody className="py-8 px-6">
          <p className="text-gray-500 leading-8">{feedback}</p>
        </CardBody>
        <Divider />
        <CardFooter className="px-6 py-8">
          <div className="feedback-img">
            <img
              className="size-12 rounded-lg"
              src={writerImg}
              alt="human image"
            />
          </div>
          <div className="feedback-writer-name mr-auto ml-4 font-semibold">
            {writerName}
          </div>
          <Button variant={"outline"} className="font-light">
            Read Full Story
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <div className="testimonials-box">
      <SectionHeader
        title="Testimonials"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore iusto minus sequi dicta rem saepe atque ea rerum officiis obcaecati. Obcaecati inventore dolor est ullam dolore beatae nemo autem at, itaque repudiandae vitae expedita porro illo, numquam veritatis iusto ratione?"
        buttonContent="View All"
      />
      <div
        className="cards-container my-10 gap-6
        grid grid-cols-1 md:grid-cols-2
      "
      >
        <FeedBackCard
          feedback="The web design course provided a solid foundation for me. The
          instructors were knowledgeable and supportive, and the interactive
          learning environment was engaging. I highly recommend it!"
          writerImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwritestylesonline.com%2Fwp-content%2Fuploads%2F2016%2F08%2FFollow-These-Steps-for-a-Flawless-Professional-Profile-Picture.jpg&f=1&nofb=1&ipt=56b602ed7c0fa5c2beafede1d9b86483d2cce5df96f7281c1bb2ef2ba64197b8&ipo=images"
          writerName="Sarah L"
        />
        <FeedBackCard
          feedback="The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!"
          writerImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F07%2F33%2Fba%2F0733ba760b29378474dea0fdbcb97107.png&f=1&nofb=1&ipt=c205d9d3f2261f6219560d662be5574fa57255e22e8926a9dc0e10d3e87f0131&ipo=images"
          writerName="Jason M"
        />
        <FeedBackCard
          feedback="The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!"
          writerImg="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic3.depositphotos.com%2F1000951%2F138%2Fi%2F950%2Fdepositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg&f=1&nofb=1&ipt=f7d29656468b7962c3293ee18016c02a3fbf01cb6614512a370aae577eee3653&ipo=images"
          writerName="Emily R"
        />
        <FeedBackCard
          feedback="I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly. I'm grateful for this course!"
          writerImg="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimages.unsplash.com%2Fphoto-1535713875002-d1d0cf377fde%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DMnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ%26ixlib%3Drb-1.2.1%26q%3D80%26w%3D1080&f=1&nofb=1&ipt=ff989df9662f632a2c85897be3b2784a2ce2006f2df35219d7bc5a9cab0fb2ce&ipo=images"
          writerName="Michael K"
        />
      </div>
    </div>
  );
}
