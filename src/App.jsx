import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Membership from "./pages/Membership";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Checkout from "./pages/Checkout";
import Meeting from "./pages/Meeting";
import Search from "./pages/Search";
import Literature from "./pages/Literature";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Pricing from "./pages/Pricing";
import SchedualPage from "./pages/SchedualPage"; // ✅ import SchedualPage
import ChangePage from "./pages/ChangePage"; // ✅ import ChangePage
import SuperCoinsPage from "./pages/SuperCoinsPage"; // ✅ new import

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
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/search" element={<Search />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      {/* Standalone Pages (no Navbar + Footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/schedual/:id" element={<SchedualPage />} /> {/* ✅ new */}
      <Route path="/change" element={<ChangePage />} /> {/* ✅ new */}
      <Route path="/super-coins" element={<SuperCoinsPage />} /> {/* ✅ new */}
    </Routes>
  );
}
