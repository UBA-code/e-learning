import RootLayout from "./components/RootLayout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Course from "./pages/Course/Course";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pricing from "./pages/Pricing/Pricing";
import Login from "./pages/Login/Login";

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Outlet />;
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ScrollToTop />}>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="courses">
          <Route index element={<Courses />} />
          <Route path=":id" element={<Course />} />
        </Route>
        <Route path="about-us" element={<AboutUs />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
