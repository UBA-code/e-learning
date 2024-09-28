import Home from "@/pages/Home";
import Nav from "./navbar/Nav";
import Footer from "@/pages/Home/sections/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <div className="px-4">
        <Nav />
      </div>
      <div className="px-4 mt-20 container mx-auto">
        <Home />
      </div>
      <Footer />
    </div>
  );
}
