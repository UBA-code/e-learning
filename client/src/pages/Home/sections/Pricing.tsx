import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { v4 as uuid4 } from "uuid";

//? icons
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

interface PlanProps {
  type: "Free" | "Premium";
  price: number;
  period: "monthly" | "yearly";
  unlockedFeatures: string[];
  lockedFeatures?: string[];
}

function Plan({
  type,
  price,
  unlockedFeatures,
  lockedFeatures,
  period,
}: PlanProps) {
  return (
    <motion.div
      className="plan-box flex-1 bg-background px-4 py-8 rounded-md outline outline-1 outline-gray-200/70"
      initial={{ opacity: 0, x: type === "Free" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="plan-type text-center bg-amber-50 border-1 border-yellow-200 rounded-md py-2 text-medium font-semibold">
        {type} Plan
      </div>
      <div className="price my-8 text-center">
        <span className="text-5xl">${price}</span>
        <span className="text-sm">/{period}</span>
      </div>
      <div className="features bg-white text-center rounded-md outline outline-1 outline-gray-200/70">
        <div className="title text-xl text-gray-700 py-6">
          Available Features
        </div>
        <div className="feature-list space-y-4 flex flex-col justify-center items-center pb-6">
          {unlockedFeatures.map((unlockedFeature) => (
            <div
              key={uuid4()}
              className="feature text-medium text-gray-600 flex items-center border-1 rounded-md p-4 space-x-2 w-[90%] lg:w-[70%]"
            >
              <span className="bg-orange-100 rounded p-1">
                <IoCheckmarkOutline size={20} />
              </span>
              <span className="text-gray-600">{unlockedFeature}</span>
            </div>
          ))}
          {lockedFeatures?.map((lockedFeature) => (
            <div
              key={uuid4()}
              className="feature text-medium text-gray-600 flex items-center border-1 rounded-md p-4 space-x-2 w-[90%] lg:w-[70%]"
            >
              <span className="outline outline-gray-200 rounded p-1">
                <IoCloseOutline size={20} />
              </span>
              <span className="text-gray-600">{lockedFeature}</span>
            </div>
          ))}
        </div>
        <Button
          variant={"default"}
          className="bg-primary py-6 rounded-b-md w-full rounded-t-none"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

function Plans({ selectedTab }: { selectedTab: string }) {
  const freePlan: PlanProps = {
    type: "Free",
    price: 0,
    period: selectedTab === "monthly" ? "monthly" : "yearly",
    unlockedFeatures: [
      "Access to selected free courses.",
      "Access to selected free courses.",
      "Basic community support.",
      "No certification upon completion.",
      "Ad-supported platform.",
    ],
    lockedFeatures: [
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
  };
  const premiumPlan: PlanProps = {
    type: "Premium",
    price: 79,
    period: selectedTab === "monthly" ? "monthly" : "yearly",
    unlockedFeatures: [
      "Unlimited access to all courses.",
      "Unlimited course materials and resources.",
      "Priority support from instructors.",
      "Course completion certificates.",
      "Ad-free experience.",
      "Access to exclusive Pro Plan community forums.",
      "Early access to new courses and updates.",
    ],
  };

  return (
    <div className="plans-container bg-white p-6 rounded-xl flex flex-col md:flex-row gap-4">
      <Plan {...freePlan} />
      <Plan {...premiumPlan} />
    </div>
  );
}

export default function Pricing({ description }: { description?: string }) {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="pricing-box overflow-hidden">
      <SectionHeader
        title="Our Pricing"
        description={
          description ||
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
      />
      <Tabs
        className="my-10 flex justify-center"
        variant="bordered"
        color="primary"
        selectedKey={activeTab}
        onSelectionChange={(key) => setActiveTab(key as string)}
      >
        <Tab key="monthly" title="Monthly" className="text-lg">
          <Plans selectedTab={activeTab} />
        </Tab>
        <Tab key="yearly" title="Yearly" className="text-lg">
          <Plans selectedTab={activeTab} />
        </Tab>
      </Tabs>
    </div>
  );
}
