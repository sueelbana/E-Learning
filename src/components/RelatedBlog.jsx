import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import authorImage from "../assets/author.jpg";
import { Eye } from "lucide-react";

export default function RelatedBlog() {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      description:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
    {
      id: 2,
      image: blog2,
      title:
        "Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution",
      author: "Lina",
      description:
        "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...",
      views: "251,232",
    },
  ];

  return (
    <section className="py-20 bg-[rgba(240,248,255,1)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-semibold text-gray-900">Related Blog</h2>
          <a
            href="/blog"
            className="text-[rgba(73,187,189,1)] font-medium hover:underline"
          >
            See all
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              <div className="w-full h-56 flex items-center justify-center bg-white overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-42 h-40 object-cover rounded-lg mt-6"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={authorImage}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm font-medium text-gray-700">
                    {blog.author}
                  </p>
                </div>

                <p className="text-sm text-gray-600 mb-4">{blog.description}</p>

                <div className="flex justify-between items-center text-sm">
                  <a
                    href={`/blog/${blog.id}`}
                    className="text-[rgba(73,187,189,1)] font-medium hover:underline"
                  >
                    Read more
                  </a>

                  <div className="flex items-center gap-1 text-gray-500">
                    <Eye className="w-4 h-4" />
                    <span>{blog.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 mt-10">
          <button className="w-7 h-7 flex items-center justify-center rounded-sm bg-white shadow hover:bg-gray-100 transition">
            ←
          </button>
          <button className="w-7 h-7 flex items-center justify-center rounded-sm bg-[rgba(73,187,189,1)] text-white shadow hover:opacity-90 transition">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
