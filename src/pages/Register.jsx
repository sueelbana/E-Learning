import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import studentsImg from "../assets/students.jpg";

export default function Register() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-6">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Image card */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl bg-neutral-200 h-full min-h-screen">
          <img
            src={studentsImg}
            alt="Students in a classroom"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* subtle vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </div>

        {/* Right: Form card */}
        <div className="p-6 sm:p-8 md:p-10 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <p className="text-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
              Welcome to lorem..!
            </p>

            {/* Segmented control */}
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

            {/* Register form */}
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">User name</label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  className="mt-1 block w-full rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2 focus:border-cyan-500 focus:ring-cyan-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 h-11 rounded-full bg-cyan-500 text-white font-medium shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
