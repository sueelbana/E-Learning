import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import SchedualPage from "./pages/SchedualPage";
import ChangePage from "./pages/ChangePage";
import SuperCoinsPage from "./pages/SuperCoinsPage";
import LearnPage from "./pages/LearnPage";
import LessonPage from "./pages/LessonPage";
import Careers from "./pages/Careers"; 
import AboutUs from "./pages/AboutUs"; 

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} /> 
        <Route path="/about" element={<AboutUs />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/schedual/:id" element={<SchedualPage />} />{" "}
      <Route path="/change" element={<ChangePage />} /> 
      <Route path="/super-coins" element={<SuperCoinsPage />} />{" "}
      <Route path="/learn" element={<LearnPage />} />{" "}
      <Route path="/learn/lesson/:id" element={<LessonPage />} />{" "}
    </Routes>
  );
}
