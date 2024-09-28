import logo from "@/assets/nav/logo.svg";
import { Button, Divider } from "@nextui-org/react";

//? icons
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer bg-white px-6 pt-16">
      <div className="footer-content md:flex md:space-x-[10%] container mx-auto">
        <div className="space-y-8 md:mr-auto">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="contacts [&>*]:flex [&>*]:items-center [&>*]:gap-2 space-y-4">
            <a className="mail" href="#">
              <span>
                <IoMail size={25} />
              </span>
              <span>hello@skillbridge.com</span>
            </a>
            <a className="phone" href="#">
              <span>
                <FaPhone size={20} />
              </span>
              <span>+91 91813 23 2309</span>
            </a>
            <a className="location" href="#">
              <span>
                <MdLocationOn size={25} />
              </span>
              <span>Somewhere in the World</span>
            </a>
          </div>
        </div>
        <div className="flex gap-8 my-8 md:my-0">
          <div className="home-box">
            <div className="home">
              <h1 className="text-lg font-medium mb-3">Home</h1>
              <div className="links [&>*]:font-light [&>*]:text-gray-500  [&>*]:text-[15px] space-y-1">
                <div>Benefits</div>
                <div>Our Courses</div>
                <div>Our Testimonials</div>
                <div>Our FAQ</div>
              </div>
            </div>
          </div>
          <div className="about-us-box">
            <div className="about-us">
              <h1 className="text-lg font-medium mb-3">About Us</h1>
              <div className="links [&>*]:font-light [&>*]:text-gray-500  [&>*]:text-[15px] space-y-1">
                <div>Company</div>
                <div>Achievement</div>
                <div>Our Goals</div>
              </div>
            </div>
          </div>
        </div>
        <div className="social-profiles">
          <div className="title text-lg font-medium mb-3">Social Profiles</div>
          <div className="social-icons flex gap-4">
            <div className="facebook">
              <Button
                isIconOnly
                className="bg-gray-100 rounded-md border border-gray-200/40"
              >
                <FaFacebook size={18} />
              </Button>
            </div>
            <div className="twitter">
              <Button
                isIconOnly
                className="bg-gray-100 rounded-md border border-gray-200/40"
              >
                <FaTwitter size={18} />
              </Button>
            </div>
            <div className="linkedin">
              <Button
                isIconOnly
                className="bg-gray-100 rounded-md border border-gray-200/40"
              >
                <FaLinkedin size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Divider className="my-4 bg-gray-100" />
      <div className="copyright pb-4 text-center text-gray-500 text-sm">
        © 2023 Skillbridge. All rights reserved.
      </div>
    </div>
  );
}
