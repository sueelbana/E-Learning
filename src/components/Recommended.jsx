import { Clock, Grid, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import navigation hook

import article1 from "../assets/article1.jpg";
import article2 from "../assets/article3.jpg";
import article3 from "../assets/article1.jpg";
import article4 from "../assets/article3.jpg";
import authorImg from "../assets/author.jpg";

const articles = [
  {
    id: 1,
    image: article1,
    duration: "2 Months",
    price: "$100",
    discountPrice: "$80",
  },
  {
    id: 2,
    image: article2,
    duration: "1 Month",
    price: "$100",
    discountPrice: "$80",
  },
  {
    id: 3,
    image: article3,
    duration: "3 Months",
    price: "$100",
    discountPrice: "$80",
  },
  {
    id: 4,
    image: article4,
    duration: "1 Month",
    price: "$100",
    discountPrice: "$80",
  },
];

export default function Recommended() {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/pricing"); // Redirect to pricing page
  };

  return (
    <section className="w-full py-10 px-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recommended for you</h2>
        <a
          href="#"
          className="text-sky-500 hover:text-sky-600 text-sm font-medium"
        >
          See all
        </a>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            onClick={handleCardClick} // Redirect on click
            className="rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition bg-white flex flex-col items-center cursor-pointer"
          >
            {/* Image (centered & slightly larger) */}
            <img
              src={article.image}
              alt="AWS Certified Solutions Architect"
              className="w-46 h-40 object-cover rounded-lg mt-6"
            />

            {/* Content */}
            <div className="p-4 w-full">
              {/* Category + Duration */}
              <div className="flex items-center text-sm text-gray-500 gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <Grid size={14} />
                  Design
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base mb-2 text-center">
                AWS Certified solutions Architect
              </h3>
              <p className="text-sm text-gray-500 mb-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>

              {/* Author + Price */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <img
                    src={authorImg}
                    alt="Lina"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">Lina</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 line-through text-sm mr-2">
                    {article.price}
                  </span>
                  <span className="text-sky-500 font-semibold">
                    {article.discountPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end gap-2 mt-6">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[rgba(73,187,189,1)] shadow hover:opacity-90 transition">
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-[rgba(73,187,189,1)] shadow hover:opacity-90 transition">
          <ChevronRight className="w-4 h-4 text-white" />
        </button>
      </div>
    </section>
  );
}
