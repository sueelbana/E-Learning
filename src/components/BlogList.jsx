import { Link } from "react-router-dom"; // ✅ Only if you're using React Router
import uxImage from "../assets/ux.jpg";
import reactImage from "../assets/react.jpg";
import phpImage from "../assets/php.jpg";
import jsImage from "../assets/js.jpg";

export default function BlogList() {
  const blogs = [
    {
      id: 1,
      title: "Why Swift UI Should Be on the Radar of Every Mobile Developer",
      image: uxImage,
      link: "/blog/1",
    },
    {
      id: 2,
      title: "React Best Practices for Scalable Apps",
      image: reactImage,
      link: "/blog/2",
    },
    {
      id: 3,
      title: "Mastering PHP for Web Development",
      image: phpImage,
      link: "/blog/3",
    },
    {
      id: 4,
      title: "JavaScript ES2025 Features You Should Know",
      image: jsImage,
      link: "/blog/4",
    },
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
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative rounded-xl overflow-hidden shadow-md group"
            >
              {/* Wrap Image with Link */}
              <Link to={blog.link}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
