import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/log.jpg"; 


export default function DefaultNavbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={Logo} alt="E-Learning Logo" className="h-12 w-auto" />
        </Link>

        {/* Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `hover:text-[rgba(73,187,189,1)] ${
                isActive
                  ? "text-[rgba(73,187,189,1)] font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              `hover:text-[rgba(73,187,189,1)] ${
                isActive
                  ? "text-[rgba(73,187,189,1)] font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/careers"
            className={({ isActive }) =>
              `hover:text-[rgba(73,187,189,1)] ${
                isActive
                  ? "text-[rgba(73,187,189,1)] font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Careers
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              `hover:text-[rgba(73,187,189,1)] ${
                isActive
                  ? "text-[rgba(73,187,189,1)] font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-[rgba(73,187,189,1)] ${
                isActive
                  ? "text-[rgba(73,187,189,1)] font-semibold"
                  : "text-gray-700 dark:text-gray-200"
              }`
            }
          >
            About Us
          </NavLink>
        </div>

        {/* Right Side (Login / Register) */}
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-[rgba(73,187,189,1)]"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="px-4 py-2 rounded-full bg-[rgba(73,187,189,1)] text-white text-sm font-medium hover:opacity-90"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
