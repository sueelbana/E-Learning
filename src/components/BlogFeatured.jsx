import React from "react";
import BlogImg from "../assets/blog.jpg";

export default function BlogFeatured() {
  return (
    <section className="py-16 bg-[#e2f1ff]">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left - Text Content */}
        <div>
          <p className="text-sm text-gray-700">
            By Thamodrabins<span className="font-medium text-gray-900"></span>{" "}
            in{" "}
            <span className="text-[rgba(73,187,189,1)] font-semibold">
              Inspiration
            </span>
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold leading-snug text-[rgba(47,50,125,1)]">
            Why Swift UI Should Be on the <br></br>Radar of Every Mobile<br></br>
            Developer
          </h2>
          <p className="mt-4 text-gray-800 text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor
          </p>
          <button className="mt-6 px-6 py-2 bg-[rgba(73,187,189,1)] text-white text-sm font-medium rounded-md hover:opacity-90 transition">
            Start learning now
          </button>
        </div>

        {/* Right - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={BlogImg}
            alt="Blog Highlight"
            className="w-full max-w-md h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
