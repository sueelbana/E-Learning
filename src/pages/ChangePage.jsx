import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom"; // ✅ using Link

export default function ChangePage() {
  const [date, setDate] = useState(new Date());

  const events = [
    {
      date: "2025-09-12",
      title: "Adobe XD Live Class",
      time: "2 PM - 4 PM",
      color: "bg-red-100 text-red-700",
    },
    {
      date: "2025-09-12",
      title: "Prototyping Workshop",
      time: "6 PM - 8 PM",
      color: "bg-green-100 text-green-700",
    },
    {
      date: "2025-09-14",
      title: "Working with Components",
      time: "3 PM - 5 PM",
      color: "bg-blue-100 text-blue-700",
    },
  ];

  // Format selected date to match events
  const selectedDate = date.toISOString().split("T")[0];
  const todaysEvents = events.filter((e) => e.date === selectedDate);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-92 bg-white border-r p-4 overflow-y-auto">
        {/* Small Rectangle with Arrow */}
        <Link
          to="/super-coins" // ✅ replace with your actual route
          className="w-10 h-10 flex items-center justify-center rounded-md mb-4"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </Link>

        {/* Title */}
        <h3 className="text-base font-semibold mb-3">Change Simplification</h3>

        <div className="space-y-2">
          <div className="flex justify-between items-center px-3 py-2 rounded-md bg-green-100 text-sm">
            <span>Lesson 01: Introduction about XD</span>
            <span className="text-gray-600">30 mins</span>
          </div>
          <div className="flex justify-between items-center px-3 py-2 rounded-md bg-yellow-100 text-sm">
            <span>Lesson 02: Prototyping Basics</span>
            <span className="text-gray-600">30 mins</span>
          </div>
          <div className="flex justify-between items-center px-3 py-2 rounded-md bg-blue-100 text-sm">
            <span>Lesson 03: Working with Components</span>
            <span className="text-gray-600">30 mins</span>
          </div>
          <div className="flex justify-between items-center px-3 py-2 rounded-md bg-pink-100 text-sm">
            <span>Lesson 04: Advanced Animations</span>
            <span className="text-gray-600">30 mins</span>
          </div>
        </div>

        <h3 className="text-base font-semibold mt-8 mb-3">PRACTICE QUIZ</h3>
        <div className="space-y-1">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-3 py-2 rounded-md text-sm ${
                i % 4 === 0
                  ? "bg-blue-100"
                  : i % 4 === 1
                  ? "bg-yellow-100"
                  : i % 4 === 2
                  ? "bg-pink-100"
                  : "bg-teal-100"
              }`}
            >
              <span>Lesson {i + 1}: Introduction about XD</span>
              <span className="text-gray-600">30 mins</span>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header Section */}
        <div
          className="px-8 py-6 text-white flex justify-between items-center"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          <div>
            <h1 className="text-2xl font-bold">
              Learn about Adobe XD & Prototyping
            </h1>
            <p className="text-sm opacity-90">Introduction about XD</p>
          </div>
          <span className="text-sm opacity-90">1 hour</span>
        </div>

        {/* Description */}
        <div className="p-8">
          <h2 className="text-lg font-semibold mb-2">Share and refer</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Calendar */}
          <div className="mt-6 bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calendar Picker */}
              <div>
                <h3 className="font-semibold mb-3">Select a Date</h3>
                <Calendar
                  onChange={setDate}
                  value={date}
                  className="rounded-md border w-full"
                />
              </div>

              {/* Selected Day & Events */}
              <div>
                <h3 className="font-semibold mb-3">{date.toDateString()}</h3>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {todaysEvents.length > 0 ? (
                    todaysEvents.map((event, i) => (
                      <div key={i} className={`p-4 rounded-md ${event.color}`}>
                        <p className="text-sm font-medium">{event.title}</p>
                        <span className="text-xs text-gray-500">
                          {event.time}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-gray-500">
                      No events for this day.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
