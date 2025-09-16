import { Link } from "react-router-dom";

import designIcon from "../assets/icons/design.jpg";
import developmentIcon from "../assets/icons/development.jpg";
import developmentIcon2 from "../assets/icons/development2.jpg";
import businessIcon from "../assets/icons/business.jpg";
import marketingIcon from "../assets/icons/marketing.jpg";
import photographyIcon from "../assets/icons/photography.jpg";
import actingIcon from "../assets/icons/acting2.jpg";
import businessIcon2 from "../assets/icons/business2.jpg";

const categories = [
  { title: "Design", icon: designIcon },
  { title: "Development", icon: developmentIcon },
  { title: "Development", icon: developmentIcon2 },
  { title: "Business", icon: businessIcon },
  { title: "Marketing", icon: marketingIcon },
  { title: "Photography", icon: photographyIcon },
  { title: "Acting", icon: actingIcon },
  { title: "Business", icon: businessIcon2 },
];

export default function CourseCategories() {
  return (
    <section className="py-12">
      <div className="px-4 max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-xl font-semibold text-center mb-10">
          Choice favourite course from top category
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <Link
              key={index}
              to={`/courses/${cat.title.toLowerCase()}`} // redirect to new page
              state={{ category: cat }} // pass category data
              className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              {/* Icon */}
              <div className="w-16 h-16 flex items-center justify-center rounded-xl mb-4">
                <img src={cat.icon} alt={cat.title} className="w-12 h-12" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2">{cat.title}</h3>

              {/* Description */}
              <p className="text-gray-500 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
