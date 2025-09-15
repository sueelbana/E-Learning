import React, { useState } from "react";

const tabs = [
  "About",
  "Course",
  "Notes",
  "Project",
  "Podcast",
  "Book",
  "Review",
];

export default function TabsNavigation() {
  const [activeTab, setActiveTab] = useState("Book");

  return (
    <div className="flex flex-wrap justify-center gap-4 my-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-2 rounded-md font-medium transition ${
            activeTab === tab
              ? "bg-teal-500 text-white shadow-md"
              : "bg-gray-300 text-gray-700 hover:bg-gray-400"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
