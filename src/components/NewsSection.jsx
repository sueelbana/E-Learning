import NewsImg1 from "../assets/news1.jpg";
import NewsImg2 from "../assets/news2.jpg";
import NewsImg3 from "../assets/news3.jpg";
import NewsImg4 from "../assets/news4.jpg";

export default function NewsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[rgba(47,50,125,1)]">
            Lastest News and Resources
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm md:text-base">
            See the developments that have occurred to TOTC in the world
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Featured News */}
          <div className="space-y-4 max-w-lg mx-auto">
            <img
              src={NewsImg1}
              alt="News 1"
              className="w-full h-64 object-cover rounded-lg"
            />
            <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-[rgba(73,187,189,1)] rounded-full">
              NEWS
            </span>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>
            <a
              href="#"
              className="text-[rgba(73,187,189,1)] text-sm font-medium hover:underline"
            >
              Read more →
            </a>
          </div>

          {/* Right - Other News */}
          <div className="space-y-6">
            {/* News item */}
            <div className="flex gap-4">
              <img
                src={NewsImg2}
                alt="News 2"
                className="w-40 h-28 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Class Technologies Inc. Closes $30 Million Series A Financing
                  to Meet High Demand
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Class Technologies Inc., the company that <br />
                  created Class...
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src={NewsImg3}
                alt="News 3"
                className="w-40 h-28 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Zoom’s earliest investors are betting millions on a better
                  Zoom for schools
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  Zoom was never created to be a consumer <br />
                  product. Nonetheless, the...
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src={NewsImg4}
                alt="News 4"
                className="w-40 h-28 object-cover rounded-lg"
              />
              <div className="space-y-2">
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  Former Blackboard CEO Raises $16M to Bring LMS Features to
                  Zoom Classrooms
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  This year, investors have reaped big <br />
                  financial returns from betting on Zoom...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
