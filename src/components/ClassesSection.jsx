import React from "react";
import JaneImg from "../assets/patricia.jpg";
import AdamImg from "../assets/adam.jpg";
import TomaraImg from "../assets/emma.jpg";

const creators = [
  {
    id: 1,
    name: "Jane Cooper",
    image: JaneImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    name: "Adam",
    image: AdamImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    name: "Tomara",
    image: TomaraImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    name: "Jane Cooper",
    image: JaneImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 5,
    name: "Jane Cooper",
    image: JaneImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 6,
    name: "Jane Cooper",
    image: JaneImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export default function ClassesSection() {
  return (
    <section className="py-12 px-6 md:px-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
          Classes taught by real creators
        </h2>
        <a href="#" className="text-teal-500 font-medium hover:underline">
          See all
        </a>
      </div>

      {/* Grid of creators */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {creators.map((creator) => (
          <div key={creator.id} className="flex flex-col items-center">
            {/* Image above card */}
            <img
              src={creator.image}
              alt={creator.name}
              className="w-36 h-36 object-cover mb-4"
            />

            {/* White card below */}
            <div className="bg-white shadow-md px-6 py-4 w-full text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {creator.name}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {creator.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
