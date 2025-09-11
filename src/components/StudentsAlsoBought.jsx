import { ChevronLeft, ChevronRight } from "lucide-react";
import { LayoutGrid, Clock } from "lucide-react"; // example icons
import linaAvatar from "../assets/lina.jpg";
import course1 from "../assets/s1.jpg";
import course2 from "../assets/s2.jpg";
import course3 from "../assets/s3.jpg";

const courses = [
  {
    id: 1,
    image: course1,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    avatar: linaAvatar,
    oldPrice: "$100",
    newPrice: "$80",
  },
  {
    id: 2,
    image: course2,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    avatar: linaAvatar,
    oldPrice: "$100",
    newPrice: "$80",
  },
  {
    id: 3,
    image: course3,
    category: "Design",
    duration: "3 Month",
    title: "AWS Certified solutions Architect",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    instructor: "Lina",
    avatar: linaAvatar,
    oldPrice: "$100",
    newPrice: "$80",
  },
];

export default function StudentsAlsoBought() {
  return (
    <div className="bg-blue-50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            Students also bought
          </h2>
          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-10">
            <button className="w-7 h-7 flex items-center justify-center rounded-sm bg-white shadow hover:bg-gray-100 transition">
              ←
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded-sm bg-[rgba(73,187,189,1)] text-white shadow hover:opacity-90 transition">
              →
            </button>
          </div>
        </div>

        {/* Courses Row */}
        <div className="flex space-x-6 overflow-x-auto scrollbar-hide">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition w-72 flex-shrink-0"
            >
              {/* Course Image */}
              <div className="flex items-center justify-center h-40">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-26 w-48 object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                {/* Title */}
                <h3 className="text-base font-semibold text-gray-800">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600">{course.description}</p>

                {/* Category + Duration */}
                <div className="flex justify-between text-xs text-gray-500">
                  {/* Left: Category */}
                  <div className="flex items-center space-x-1">
                    <LayoutGrid size={14} className="text-gray-400" />
                    <span>{course.category}</span>
                  </div>

                  {/* Right: Duration */}
                  <div className="flex items-center space-x-1">
                    <Clock size={14} className="text-gray-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Instructor & Price */}
                <div className="flex justify-between items-center mt-3">
                  <div className="flex items-center space-x-2">
                    <img
                      src={course.avatar}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-sm">{course.instructor}</span>
                  </div>
                  <div className="text-sm">
                    <span className="line-through text-gray-400 mr-1">
                      {course.oldPrice}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "rgba(73, 187, 189, 1)" }}
                    >
                      {course.newPrice}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
