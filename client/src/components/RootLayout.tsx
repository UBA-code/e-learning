import Nav from "./navbar/Nav";
import Footer from "@/pages/Home/sections/Footer";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="px-4">
        <Nav />
      </div>
      <div className="px-4 mt-20 container mx-auto">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}
