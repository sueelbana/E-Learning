import { Link } from "react-router-dom";
import course1 from "../assets/lap.jpg";
import course2 from "../assets/study.jpg";
import course3 from "../assets/cat.jpg";

const offers = [
  {
    id: 1,
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: course1,
  },
  {
    id: 2,
    discount: "10%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: course2,
  },
  {
    id: 3,
    discount: "50%",
    title: "Lorem ipsum dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    image: course3,
  },
];

export default function EducationOffers() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
]      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">
          Top Education offers and deals are listed here
        </h2>
        <Link to="/offers" className="text-sm text-teal-600 hover:underline">
          See all
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="relative rounded-xl overflow-hidden shadow-md group mx-auto w-72"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 p-4 flex flex-col justify-end">
              <div className="absolute top-4 left-4 bg-teal-500 text-white px-6 py-3 rounded-lg text-2xl font-extrabold shadow-lg">
                {offer.discount}
              </div>

              <h3 className="text-white font-bold text-lg mt-20">
                {offer.title}
              </h3>
              <p className="text-gray-200 text-sm mt-1">{offer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
