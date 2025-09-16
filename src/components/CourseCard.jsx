import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";
import img7 from "../assets/7.jpg";
import img8 from "../assets/8.jpg";
import avatar from "../assets/profile.jpg";

import { Grid, Clock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img1,
  },
  {
    id: 2,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img2,
  },
  {
    id: 3,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img3,
  },
  {
    id: 4,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img4,
  },
  {
    id: 5,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img5,
  },
  {
    id: 6,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img6,
  },
  {
    id: 7,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img7,
  },
  {
    id: 8,
    title: "AWS Certified solutions Architect",
    instructor: "Lina",
    price: "$80",
    oldPrice: "$100",
    category: "Design",
    duration: "3 Month",
    image: img8,
  },
];

export default function CoursesGrid() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4 flex flex-col flex-grow">
              <div className="flex justify-between text-gray-400 text-sm mb-2">
                <div className="flex items-center gap-1">
                  <Grid size={14} className="text-gray-400" />
                  <span>{course.category}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-gray-400" />
                  <span>{course.duration}</span>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {course.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 flex-grow">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <img
                    src={avatar}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full border border-gray-200"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {course.instructor}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-sm line-through text-gray-400 mr-2">
                    {course.oldPrice}
                  </span>
                  <span className="text-teal-500 font-bold">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
