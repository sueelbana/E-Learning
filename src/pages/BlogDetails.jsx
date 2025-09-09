import authorImage from "../assets/profile2.jpg";
import blogHero from "../assets/rec2.jpg";
import RelatedBlog from "../components/RelatedBlog";

export default function BlogDetails() {
  return (
    <section className="w-full">
      {/* Full-width Hero Image */}
      <div className="w-full h-64 md:h-80 lg:h-[500px]">
        <img
          src={blogHero}
          alt="Blog Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Title */}
        <h1
          className="text-2xl md:text-3xl font-bold mb-6 text-left"
          style={{ color: "rgba(47, 50, 125, 1)" }}
        >
          Why Swift UI Should Be on the Radar of Every Mobile Developer
        </h1>

        {/* Description / Body */}
        <div className="text-gray-700 leading-relaxed space-y-4 mb-8 text-left">
          <p>
            TOCT is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <p>
            TOCT is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <p>
            TOCT is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
          <p>
            TOCT is a platform that allows educators to create online classes
            whereby they can store the course materials online; manage
            assignments, quizzes and exams; monitor due dates; grade results and
            provide students with feedback all in one place.
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-3 mb-8">
          <span className="px-3 py-1 bg-blue-50 text-sm rounded-full text-gray-500">
            affordable
          </span>
          <span className="px-3 py-1 bg-blue-50 text-sm rounded-full text-gray-500">
            stunning
          </span>
          <span className="px-3 py-1 bg-blue-50 text-sm rounded-full text-gray-500">
            making
          </span>
          <span className="px-3 py-1 bg-blue-50 text-sm rounded-full text-gray-500">
            madbrawns
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Author Card */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img
              src={authorImage}
              alt="Lina"
              className="w-12 h-12 object-cover"
            />
            <div>
              <p className="text-gray-500 text-sm">written by</p>
              <p className="text-gray-900 font-semibold text-sm">Lina</p>
            </div>
          </div>

          <button className="px-4 py-2 rounded-md bg-transparent text-[rgba(73,187,189,1)] border border-[rgba(73,187,189,1)] text-sm font-medium hover:opacity-90 transition">
            Follow
          </button>
        </div>
      </div>

      {/* Related Blog Section */}
      <RelatedBlog />
    </section>
  );
}
