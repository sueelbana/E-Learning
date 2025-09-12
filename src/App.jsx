import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Membership from "./pages/Membership";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import Search from "./pages/Search";
import Literature from "./pages/Literature";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";

// ✅ new imports
import SchedualPage from "./pages/SchedualPage";
import ChangePage from "./pages/ChangePage";
import SuperCoinsPage from "./pages/SuperCoinsPage";
import LearnPage from "./pages/LearnPage";
import LessonPage from "./pages/LessonPage"; // ✅ new lesson detail page

export default function App() {
  return (
    <Routes>
      {/* Routes with Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/search" element={<Search />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* Standalone Pages (no Navbar + Footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/schedual/:id" element={<SchedualPage />} />{" "}
      {/* ✅ SchedualPage */}
      <Route path="/change" element={<ChangePage />} /> {/* ✅ ChangePage */}
      <Route path="/super-coins" element={<SuperCoinsPage />} />{" "}
      {/* ✅ SuperCoinsPage */}
      <Route path="/learn" element={<LearnPage />} />{" "}
      {/* ✅ Sidebar + lessons list */}
      <Route path="/learn/lesson/:id" element={<LessonPage />} />{" "}
      {/* ✅ individual lesson */}
    </Routes>
  );
}
