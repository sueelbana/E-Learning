import { ArrowLeft, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function SchedualPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-72 bg-white border-r p-4 overflow-y-auto">
        <Link
          to="/change" 
          className="inline-flex items-center mb-4 p-2 rounded-md bg-[rgba(73,187,189,1)] text-white hover:opacity-90 transition"
        >
          <ArrowLeft size={18} />
        </Link>

        <h3 className="text-base font-semibold mb-3">Change Simplification</h3>
        <div className="space-y-2">
          {[
            {
              id: 1,
              title: "Lesson 01: Introduction to Adobe XD",
              color: "bg-[rgba(73,187,189,0.2)] text-[rgba(73,187,189,1)]",
            },
            {
              id: 2,
              title: "Lesson 02: Tools & Interface Walkthrough",
              color: "bg-red-100 text-red-500",
            },
            {
              id: 3,
              title: "Lesson 03: Creating Components & Assets",
              color: "bg-yellow-100 text-yellow-500",
            },
            {
              id: 4,
              title: "Lesson 04: Prototyping & Interactions",
              color: "bg-green-100 text-green-500",
            },
          ].map((lesson) => (
            <div
              key={lesson.id}
              className={`flex justify-between items-center w-full py-1.5 px-3 rounded-md ${
                lesson.color.split(" ")[0]
              } text-sm`}
            >
              <div className="flex items-center gap-2">
                <BookOpen size={14} className={lesson.color.split(" ")[1]} />
                <span>{lesson.title}</span>
              </div>
              <span className="text-gray-600">30 mins</span>
            </div>
          ))}
        </div>

        <h3 className="text-base font-semibold mt-8 mb-3">PRACTICE QUIZ</h3>
        <div className="space-y-2">
          {Array.from({ length: 12 }, (_, i) => {
            const colors = [
              "bg-blue-100 text-blue-500",
              "bg-orange-100 text-orange-500",
              "bg-purple-100 text-purple-500",
              "bg-pink-100 text-pink-500",
            ];
            const color = colors[i % colors.length];
            return (
              <div
                key={i}
                className={`flex justify-between items-center w-full py-1.5 px-3 rounded-md ${
                  color.split(" ")[0]
                } text-sm`}
              >
                <div className="flex items-center gap-2">
                  <BookOpen size={14} className={color.split(" ")[1]} />
                  <span>Lesson {i + 1}: Practice Quiz</span>
                </div>
                <span className="text-gray-600">30 mins</span>
              </div>
            );
          })}
        </div>
      </aside>

      <main className="flex-1">
        <div
          className="px-8 py-6 text-white"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          <h1 className="text-2xl font-bold">
            Learn about Adobe XD & Prototyping
          </h1>
          <p className="text-sm opacity-90">Introduction about XD</p>
        </div>

        <div className="p-8 bg-blue-50">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Create new event</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Name
              </label>
              <input
                type="text"
                placeholder="Adobe XD Auto - Animate : Your Guide to Creating"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start date / Time
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="datetime-local"
                  className="border rounded-md p-2 w-full"
                />
                <input
                  type="datetime-local"
                  className="border rounded-md p-2 w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                placeholder="2118 Thornridge Cir, Syracuse, Connecticut 35624"
                className="w-full border rounded-md p-2"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notification
                </label>
                <select className="w-full border rounded-md p-2">
                  <option>30 mins</option>
                  <option>1 hour</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="jessica.harrison@example.com"
                  className="w-full border rounded-md p-2"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Description
              </label>
              <textarea
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod..."
                className="w-full border rounded-md p-2 h-24"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[rgba(73,187,189,1)] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
              >
                Save Now
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
