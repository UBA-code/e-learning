import { Card, CardBody, CardHeader } from "@nextui-org/react";
import logo from "@/assets/nav/logo.svg";
import { AnimatePresence, motion } from "framer-motion";
//? icons
import { CgClose } from "react-icons/cg";
import { Button } from "../ui/button";
import { LuMoveRight } from "react-icons/lu";
import { NavLink } from "react-router-dom";

interface MobileNavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const variants = {
  animate: { x: 50, opacity: 1 },
};

function MenuElement({ content, delay }: { content: string; delay: number }) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={"animate"}
      transition={{ ease: "easeOut", duration: 0.2, delay: delay }}
      className="menu-item flex items-center space-x-2"
    >
      <h1>{content}</h1>
      <motion.div
        className="arrow-icon"
        initial={{ x: 30, opacity: 0 }}
        variants={variants}
      >
        <LuMoveRight size={30} />
      </motion.div>
    </motion.div>
  );
}

export default function MobileNavBar({
  isOpen,
  setIsOpen,
  ...props
}: MobileNavBarProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="mobile-navbar-container fixed top-0 left-0 w-screen h-screen z-[1000] md:hidden"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ ease: "circOut", duration: 0.3 }}
        >
          <Card isBlurred className="backdrop-blur-2xl h-full px-4">
            <CardHeader className="justify-between">
              <div className="logo">
                <img src={logo} alt="logo" />
              </div>
              <Button
                variant={"ghost"}
                className="menu-toggle rounded-full size-12"
                size={"icon"}
                onClick={() => setIsOpen(!isOpen)}
              >
                <CgClose size={30} />
              </Button>
            </CardHeader>
            <CardBody className="text-2xl text-[#333] font-semibold space-y-[6vh] mt-10">
              <NavLink to={"/"} onClick={() => setIsOpen(false)}>
                <MenuElement content={"Home"} delay={0} />
              </NavLink>
              <NavLink to={"/courses"} onClick={() => setIsOpen(false)}>
                <MenuElement content={"Courses"} delay={0.1} />
              </NavLink>
              <NavLink to={"/about-us"} onClick={() => setIsOpen(false)}>
                <MenuElement content={"About Us"} delay={0.2} />
              </NavLink>
              <NavLink to={"/pricing"} onClick={() => setIsOpen(false)}>
                <MenuElement content={"Pricing"} delay={0.3} />
              </NavLink>
              <MenuElement content={"Contact Us"} delay={0.4} />
            </CardBody>
          </Card>
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}
