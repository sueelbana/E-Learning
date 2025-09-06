import uxImage from "../assets/ux.jpg";
import reactImage from "../assets/react.jpg";
import phpImage from "../assets/php.jpg";
import jsImage from "../assets/js.jpg";

export default function BlogList() {
  const blogs = [
    { image: uxImage },
    { image: reactImage },
    { image: phpImage },
    { image: jsImage },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-xl font-bold text-gray-900 mb-8">
          Reading blog list
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              {/* Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
