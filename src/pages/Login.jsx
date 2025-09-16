import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginImg from "../assets/login.jpg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-neutral-200 h-full min-h-screen">
          <img
            src={loginImg}
            alt="Students in a classroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>

        <div className="p-6 sm:p-8 md:p-10 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
              Welcome to lorem..!
            </p>

            <div className="flex items-center justify-center mb-5">
              <div className="inline-flex rounded-full p-1 bg-neutral-100 dark:bg-neutral-800">
                <Link
                  to="/login"
                  className={`px-6 py-2 rounded-full ${
                    location.pathname === "/login"
                      ? "text-white bg-cyan-500 shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      : "text-cyan-600 dark:text-cyan-400 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/60"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`px-6 py-2 rounded-full ${
                    location.pathname === "/register"
                      ? "text-white bg-cyan-500 shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      : "text-cyan-600 dark:text-cyan-400 hover:bg-neutral-200/70 dark:hover:bg-neutral-700/60"
                  }`}
                >
                  Register
                </Link>
              </div>
            </div>

            <p className="text-center text-xs text-neutral-500 dark:text-neutral-400 mb-6 max-w-sm mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="block text-sm text-neutral-700 dark:text-neutral-200 mb-1">
                  User name
                </span>
                <input
                  type="text"
                  inputMode="text"
                  required
                  placeholder="Enter your User name"
                  className="w-full h-11 px-4 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </label>

              <label className="block">
                <span className="block text-sm text-neutral-700 dark:text-neutral-200 mb-1">
                  Password
                </span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="Enter your Password"
                    className="w-full h-11 px-4 pr-11 rounded-full border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                  <button
                    type="button"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-2 my-auto h-8 w-8 grid place-items-center rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M3 3l18 18M10.584 10.59a3 3 0 104.242 4.242M9.88 4.64A9.706 9.706 0 0121 12s-2.455 5.5-9 5.5a10.32 10.32 0 01-2.39-.277M6.16 6.16A10.44 10.44 0 003 12s2.455 5.5 9 5.5c1.028 0 1.99-.118 2.885-.336"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M2.25 12s3.75-7.5 9.75-7.5S21.75 12 21.75 12 18 19.5 12 19.5 2.25 12 2.25 12z"
                        />
                        <circle cx="12" cy="12" r="3.25" strokeWidth="1.5" />
                      </svg>
                    )}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between text-sm">
                <label className="inline-flex items-center gap-2 select-none text-neutral-700 dark:text-neutral-300">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-neutral-300 dark:border-neutral-600 text-cyan-600 focus:ring-cyan-500"
                  />
                  Remember me
                </label>
                <Link
                  to="/forgot-password"
                  className="text-neutral-500 hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 h-11 rounded-full bg-cyan-500 text-white font-medium shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
