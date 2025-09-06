import { Star, ChevronRight } from "lucide-react";
import testImg from "../assets/testimonial.jpg";

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-white dark:bg-neutral-900 font-buenos">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text */}
        <div>
          <p className="uppercase tracking-wider text-sm text-neutral-500 mb-2">
            Testimonial
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[rgba(47,50,125,1)] mb-4">
            What They Say?
          </h2>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            TOTC has got more than 100k positive ratings from our users around
            the world.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-4">
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6">
            Are you too? Please give your assessment
          </p>

          <button className="px-6 py-2 border border-sky-500 text-sky-500 rounded-full hover:bg-sky-500 hover:text-white transition">
            Write your assessment →
          </button>
        </div>

        {/* Right Image + Card + Arrow */}
        <div className="relative flex justify-center">
          <img
            src={testImg}
            alt="Testimonial"
            className="rounded-2xl w-80 h-auto object-cover"
          />

          {/* Floating Testimonial Card */}
          <div className="absolute -bottom-16 -right-6 bg-white shadow-lg rounded-xl p-4 w-80">
            <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3 leading-snug">
              "Thank you so much for your help. It’s exactly what I’ve been
              looking for. You won’t regret it. It really saves me time and
              effort. TOTC is exactly what our business has been lacking."
            </p>
            <div>
              <div className="flex items-center justify-between">
                {/* Name on the left */}
                <p className="text-neutral-900">Gloria Rose</p>

                {/* Stars + Reviews stacked on the right */}
                <div className="flex flex-col items-end">
                  <div className="flex text-yellow-400 gap-0.5">
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                    <Star size={12} fill="currentColor" />
                  </div>

                  {/* Reviews text aligned right */}
                  <div className="text-right">
                    <span className="text-sm text-neutral-500">
                      12 Reviews at Yelp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Circle Right Arrow Button */}
          <button className="absolute top-1/2 right-4 transform -translate-y-3/4 bg-white text-sky-500 shadow-md rounded-full p-4 hover:bg-sky-500 hover:text-white transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
