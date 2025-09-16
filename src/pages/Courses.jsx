import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import course1 from "../assets/c1.jpg";
import course2 from "../assets/c2.jpg";
import course3 from "../assets/c3.jpg";
import profilePic from "../assets/profile.jpg";

import CourseCategories from "../components/CourseCategories";
import Recommended from "../components/Recommended";
import Choiceofcourse from "../components/Choiceofcourse";
import CoachingCTA from "../components/CoachingCTA";
import PersonalDevelopment from "../components/PersonalDevelopment";
import StudentsViewing from "../components/StudentsViewing";

const courses = [
  {
    id: 1,
    title: "AWS Certified Solutions Architect",
    image: course1,
    author: "Lina",
    progress: "Lesson 6 of 7",
    progressValue: 85,
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    image: course2,
    author: "Lina",
    progress: "Lesson 5 of 7",
    progressValue: 70,
  },
  {
    id: 3,
    title: "AWS Certified Solutions Architect",
    image: course3,
    author: "Lina",
    progress: "Lesson 5 of 7",
    progressValue: 70,
  },
];

export default function Courses() {
  return (
    <div>
      <section className="bg-blue-50 py-6 px-6 w-full">
        <div className="flex justify-between items-center mb-6">
          <h2
            className="text-xl font-bold"
            style={{ color: "rgba(37, 38, 65, 1)" }}
          >
            Welcome back, ready for your next lesson?
          </h2>
          <button className="text-sm font-bold hover:underline text-[rgba(73,187,189,1)]">
            View History
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              to={`/schedual/${course.id}`} 
              className="rounded-lg shadow-md bg-white overflow-hidden hover:shadow-lg transition block"
            >
              <div className="flex justify-center items-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-42 h-40 object-cover mt-4"
                />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-800 mb-2">
                  {course.title}
                </h3>
                <div className="flex items-center text-sm text-gray-600 mb-3">
                  <img
                    src={profilePic}
                    alt={course.author}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  {course.author}
                </div>
                <div className="mb-2">
                  <div className="w-full bg-gray-200 h-1.5 rounded-full">
                    <div
                      className="bg-teal-500 h-1.5 rounded-full"
                      style={{ width: `${course.progressValue}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 text-right mt-1">
                    {course.progress}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[rgba(73,187,189,1)] shadow hover:opacity-90 transition">
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[rgba(73,187,189,1)] shadow hover:opacity-90 transition">
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </section>

      <div className="mt-12">
        <CourseCategories />
      </div>

      <section className="bg-blue-50 py-6 px-6 w-full">
        <Recommended />
      </section>

      <Choiceofcourse />
      <CoachingCTA />
      <PersonalDevelopment />

      <section className="bg-blue-50 py-6 px-6 w-full">
        <StudentsViewing />
      </section>
    </div>
  );
}
