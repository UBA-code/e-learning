import { Divider } from "@nextui-org/react";
import { Button as NextuiButton } from "@nextui-org/react";
import { Button } from "../ui/button";
import logo from "@/assets/nav/logo.svg";

//? icons
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import MobileNavBar from "./MobileNavBar";
import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastSavedScroll = useRef(window.scrollY);

  // Function to toggle navbar visibility on scroll
  const handleScroll = () => {
    if (window.scrollY < lastSavedScroll.current) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    lastSavedScroll.current = window.scrollY;
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar-container relative w-full">
      <div
        className={`animated-navbar-box container fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full p-4 lg:px-10 backdrop-blur-lg transition duration-500 ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="navbar-content flex items-center space-x-4 w-full">
          <div className="logo mr-auto flex items-center space-x-10">
            <img src={logo} alt="" />
            <div className="big-screens-links hidden md:block">
              <NextuiButton variant={"light"}>Home</NextuiButton>
              <NextuiButton variant={"light"}>Courses</NextuiButton>
              <NextuiButton variant={"light"}>About Us</NextuiButton>
              <NextuiButton variant={"light"}>Pricing</NextuiButton>
              <NextuiButton variant={"light"}>Contact</NextuiButton>
            </div>
          </div>
          <Button variant={"ghost"}>Sign Up</Button>
          <Button>Login</Button>
          <Button
            variant={"ghost"}
            className="menu-toggle rounded-full size-12 md:hidden flex justify-end"
            size={"icon"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <HiOutlineMenuAlt3 size={30} />
          </Button>
        </div>
      </div>
      <Divider className="my-3 mt-20 bg-slate-200/80" />
      <MobileNavBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
