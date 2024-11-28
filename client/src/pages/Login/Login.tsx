import { Button } from "@/components/ui/button";
import { Checkbox, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";

import "swiper/css";

//? icons
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <motion.div
      className="login-container flex flex-col gap-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="login-section bg-white p-8 rounded-lg">
        <div className="header space-y-3 text-center">
          <h1 className="text-4xl font-medium">Login</h1>
          <p className="description text-gray-600">
            Welcome back! Please log in to access your account.
          </p>
        </div>
        <div className="login-information-area space-y-6">
          <div className="mail space-y-3">
            <label htmlFor="email" className="text-gray-600">
              Email
            </label>
            <Input
              id="email"
              type="mail"
              variant="faded"
              label="Enter your Email"
            />
          </div>
          <div className="password space-y-3">
            <label htmlFor="password" className="text-gray-600">
              Password
            </label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              variant="faded"
              label="Enter your Password"
              endContent={
                showPassword ? (
                  <IoMdEyeOff
                    onClick={() => setShowPassword(false)}
                    className="cursor-pointer"
                    size={25}
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setShowPassword(true)}
                    className="cursor-pointer"
                    size={25}
                  />
                )
              }
            />
            <div className="forgetPassword text-end text-gray-500 cursor-pointer transition hover:text-black">
              Forgot Password?
            </div>
          </div>
          <div className="remember-me-checkbox">
            <Checkbox radius="sm" size="lg">
              <span className="text-gray-600">Remember me</span>
            </Checkbox>
          </div>
        </div>
        <div className="login-btn mt-6">
          <Button className="w-full py-7">Login</Button>
        </div>
      </div>
      <div className="story-section">
        <div className="header space-y-3">
          <div className="title text-3xl tracking-wider">
            Students Testimonials
          </div>
          <div className="description text-gray-500">
            Hear from our students about their experience with SkillBridge
          </div>
        </div>
        <div className="story-slider">
          <Swiper slidesPerView={1}>
            <SwiperSlide>
              <div className="story bg-white">
                <div className="story-content">
                  The web design course provided a solid foundation for me. The
                  instructors were knowledgeable and supportive, and the
                  interactive learning environment was engaging. I highly
                  recommend it!
                </div>
                <div className="story-writer">
                  
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
}
