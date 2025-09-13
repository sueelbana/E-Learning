import { useState } from "react";
import { ChevronDown } from "lucide-react";
import bgImage from "../assets/search.JPG"; 

export default function Careers() {
  const [search, setSearch] = useState("");

  return (
    <div
      className="w-full flex flex-col items-center bg-center bg-cover py-16"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Search Box */}
      <div className="flex w-3/4 max-w-4xl rounded-lg overflow-hidden shadow-md bg-white">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your favourite course"
          className="flex-1 px-4 py-3 text-gray-700 focus:outline-none"
        />
        <button
          className="px-6 py-3 text-white font-semibold"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          Search
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-6">
        {["Subject", "Partner", "Program", "Language", "Availability", "Learning Type"].map(
          (filter) => (
            <button
              key={filter}
              className="flex items-center gap-1 bg-white px-4 py-2 rounded-md shadow text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {filter}
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          )
        )}
      </div>
    </div>
  );
}
