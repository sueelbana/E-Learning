import { Play } from "lucide-react";
import Classroom from "../assets/teacher.jpg";

export default function EverythingSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side */}
        <div>
          <h2 className="text-3xl md:text-3xl font-semibold text-gray-900 leading-snug">
            <span style={{ color: "rgba(47, 50, 125, 1)" }}>
              Everything you can do in a physical classroom,{" "}
            </span>
            <span style={{ color: "rgba(73, 187, 189, 1)" }}>
              you can do with TOTC
            </span>
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            TOTC’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>

          <a
            href="/about"
            className="mt-4 inline-block text-[rgba(73,187,189,1)] font-semibold hover:underline"
          >
            Learn more
          </a>
        </div>

        {/* Right side (Image + Play Button) */}
        <div className="relative">
          {/* Image */}
          <img
            src={Classroom}
            alt="Classroom"
            className="rounded-xl shadow-lg w-full"
          />

          {/* Play Button Overlay */}
          <button className="absolute inset-0 flex items-center justify-center">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg hover:scale-110 transition transform">
              <Play
                size={30}
                className="text-[rgba(73,187,189,1)]"
                fill="rgba(73,187,189,1)"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
