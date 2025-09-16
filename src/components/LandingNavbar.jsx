import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import logo from "../assets/logo.jpg";

const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About Us" },
];

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored
      ? stored === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(isDark);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <header
      className="sticky top-0 z-50"
      style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="TOTC Logo" className="h-12 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center space-x-12">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                clsx(
                  "text-sm font-medium text-white hover:underline underline-offset-4",
                  isActive
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/login"
            className="px-4 py-1.5 text-sm rounded-full border border-white text-white font-medium hover:bg-white hover:text-teal-600 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-1.5 text-sm rounded-full bg-white text-teal-600 font-medium hover:bg-neutral-100 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
