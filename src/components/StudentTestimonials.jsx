import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaAndroid, FaApple } from "react-icons/fa";
import studentImg from "../assets/student.jpg"; // replace with your image

export default function StudentTestimonials() {
  const testimonials = [
    {
      name: "Bulkin Simons",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: studentImg,
    },
    {
      name: "Bulkin Simons",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: studentImg,
    },
    {
      name: "Bulkin Simons",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: studentImg,
    },
    {
      name: "Bulkin Simons",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod",
      img: studentImg,
    },
  ];

  return (
    <section className="bg-[rgba(236,246,255,1)] py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold mb-10 text-neutral-800">
          What our students have to say
        </h2>

        {/* Carousel with Arrows */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button className="absolute left-0 bg-[rgba(73,187,189,1)] text-white rounded-full p-2 shadow-md hover:opacity-90 transition">
            <ChevronLeft size={20} />
          </button>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow p-6 flex flex-col items-center"
              >
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-16 h-16 mb-4 object-cover"
                />
                <h3 className="font-semibold text-neutral-800 mb-2">
                  {t.name}
                </h3>
                <p className="text-sm text-neutral-600">{t.text}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 bg-[rgba(73,187,189,1)] text-white rounded-full p-2 shadow-md hover:opacity-90 transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* App Download Banner */}
      <div className="mt-16 bg-[rgba(30,33,63,1)] rounded-3xl py-12 px-8 flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
        {/* Left Heading */}
        <h3 className="text-white font-bold text-lg mb-6 md:mb-0">
          APP is available for free
        </h3>

        {/* Right Buttons */}
        <div className="flex gap-4">
          {/* Android App Button */}
          <button className="flex items-center gap-2 bg-sky-500 text-white px-6 py-2 rounded-lg hover:bg-sky-600 transition">
            <FaAndroid size={18} />
            Android APP
          </button>

          {/* iOS App Button */}
          <button className="flex items-center gap-2 bg-[rgba(85,239,196,1)] text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
            <FaApple size={18} />
            iOS APP
          </button>
        </div>
      </div>
    </section>
  );
}
