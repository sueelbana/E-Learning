import book1 from "../assets/b1.jpg";
import book2 from "../assets/b2.jpg";
import book3 from "../assets/b3.jpg";
import book4 from "../assets/b4.jpg";
import book5 from "../assets/b5.jpg";
import book6 from "../assets/b2.jpg";

const books = [
  { id: 1, title: "All Benefits of PLUS", price: "$24", image: book1 },
  { id: 2, title: "All Benefits of PLUS", price: "$24", image: book2 },
  { id: 3, title: "All Benefits of PLUS", price: "$24", image: book3 },
  { id: 4, title: "All Benefits of PLUS", price: "$24", image: book4 },
  { id: 5, title: "All Benefits of PLUS", price: "$24", image: book5 },
  { id: 6, title: "All Benefits of PLUS", price: "$24", image: book6 },
];

export default function LiteratureCourses() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 bg-white">
      {/* Section Title */}
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Literature course
      </h2>

      {/* Books Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border rounded shadow-sm hover:shadow-md transition-shadow overflow-hidden w-60 mx-auto"
          >
            <img
              src={book.image}
              alt={book.title}
              className="mx-auto my-4 max-h-40 max-w-[70%] object-contain"
            />
            <div className="p-4 flex justify-between items-center">
              <p className="text-sm text-gray-600">{book.title}</p>
              <span className="text-teal-500 font-bold">{book.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 gap-2">
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
          &lt;
        </button>
        <button className="px-3 py-1 border rounded-md text-gray-700 bg-teal-500">
          1
        </button>
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
          3
        </button>
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
          4
        </button>
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
          5
        </button>
        <button className="px-3 py-1 border rounded-md text-gray-500 hover:bg-gray-100">
          &gt;
        </button>
      </div>
    </div>
  );
}
