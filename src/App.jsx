import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Landing from "./pages/Landing.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import Membership from "./pages/Membership.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import Checkout from "./pages/Checkout.jsx";
import CourseCalendar from "./pages/CourseCalendar.jsx";
import Meeting from "./pages/Meeting.jsx";
import Search from "./pages/Search.jsx";
import Literature from "./pages/Literature.jsx";
import NotFound from "./pages/NotFound.jsx";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Routes with Navbar + Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/calendar" element={<CourseCalendar />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/search" element={<Search />} />
        <Route path="/literature" element={<Literature />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Standalone Login Page (no Navbar + Footer) */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}
