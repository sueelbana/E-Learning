import React from "react";
import OfferImage from "../assets/pdf.jpg";

const TopEducationOffers = () => {
  const offers = [
    {
      id: 1,
      discount: "50%",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC’s school management software helps traditional and online schools manage scheduling.",
      image: OfferImage,
    },
    {
      id: 2,
      discount: "50%",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC’s school management software helps traditional and online schools manage scheduling.",
      image: OfferImage,
    },
    {
      id: 3,
      discount: "50%",
      title: "FOR INSTRUCTORS",
      description:
        "TOTC’s school management software helps traditional and online schools manage scheduling.",
      image: OfferImage,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Top Education offers and deals are listed here
        </h2>
        <a
          href="#"
          className="text-sm text-sky-500 hover:underline font-medium"
        >
          See all
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-72 object-cover"
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start p-6">
              <span className="absolute top-6 left-6 bg-red-500 text-white text-lg font-bold px-3 py-1 rounded">
                {offer.discount}
              </span>

              <h3 className="text-white text-xl mb-2">{offer.title}</h3>

              <p className="text-white text-md max-w-xs">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopEducationOffers;
