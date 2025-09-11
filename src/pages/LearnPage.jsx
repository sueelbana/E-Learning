import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // ✅ Import Arrow
import LessonDetail from "../components/LessonDetail";
import TestimonialCard from "../components/TestimonialCard";
import StudentsAlsoBought from "../components/StudentsAlsoBought";

export default function LearnPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r p-4 overflow-y-auto">
        {/* Arrow Button */}
        <Link
          to="/courses" // ✅ Replace with your actual back route
          className="w-10 h-10 flex items-center justify-center rounded-md mb-4"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>

        {/* Title */}
        <h3 className="text-base font-semibold mb-3">Change Simplification</h3>

        {/* Lessons */}
        <div className="space-y-2">
          <Link
            to="/learn/lesson-1"
            className="flex justify-between items-center px-3 py-1.5 rounded-md bg-green-100 text-sm"
          >
            <span>Lesson 01: Introduction</span>
            <span className="text-gray-600">25 mins</span>
          </Link>
          <Link
            to="/learn/lesson-2"
            className="flex justify-between items-center px-3 py-1.5 rounded-md bg-yellow-100 text-sm"
          >
            <span>Lesson 02: Basics of Design</span>
            <span className="text-gray-600">30 mins</span>
          </Link>
          <Link
            to="/learn/lesson-3"
            className="flex justify-between items-center px-3 py-1.5 rounded-md bg-blue-100 text-sm"
          >
            <span>Lesson 03: Components</span>
            <span className="text-gray-600">30 mins</span>
          </Link>
          <Link
            to="/learn/lesson-4"
            className="flex justify-between items-center px-3 py-1.5 rounded-md bg-pink-100 text-sm"
          >
            <span>Lesson 04: Animations</span>
            <span className="text-gray-600">35 mins</span>
          </Link>
        </div>

        {/* Practice Quiz Section 1 */}
        <h3 className="text-base font-bold mt-6 mb-3">Practice Quiz</h3>
        <div className="space-y-2">
          {Array.from({ length: 13 }).map((_, i) => (
            <Link
              key={i}
              to={`/learn/quiz/${i + 1}`}
              className={`flex justify-between items-center px-3 py-1.5 rounded-md text-sm ${
                i % 4 === 0
                  ? "bg-blue-100"
                  : i % 4 === 1
                  ? "bg-yellow-100"
                  : i % 4 === 2
                  ? "bg-pink-100"
                  : "bg-teal-100"
              }`}
            >
              <span>Lesson 01 : Introduction about XD</span>
              <span className="text-gray-600">30 mins</span>
            </Link>
          ))}
        </div>

        {/* Practice Quiz Section 2 */}
        <h3 className="text-base font-bold mt-6 mb-3">Practice Quiz</h3>
        <div className="space-y-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <Link
              key={i}
              to={`/learn/quiz/${i + 1}`}
              className={`flex justify-between items-center px-3 py-2 rounded-md text-sm ${
                i % 4 === 0
                  ? "bg-blue-100"
                  : i % 4 === 1
                  ? "bg-yellow-100"
                  : i % 4 === 2
                  ? "bg-pink-100"
                  : "bg-teal-100"
              }`}
            >
              <span>Lesson 01 : Introduction about XD</span>
            </Link>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-blue-50">
        {/* Header Section */}
        <div
          className="px-8 py-6 text-white flex justify-between items-center"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          <div>
            <h1 className="text-2xl font-bold">
              Learn about Adobe XD & Prototyping
            </h1>
            <p className="text-sm opacity-90">Introduction about XD</p>
          </div>
        </div>

        {/* Lesson Details Component */}
        <LessonDetail />
        <TestimonialCard />
        <StudentsAlsoBought />
      </main>
    </div>
  );
}
