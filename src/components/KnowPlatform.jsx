import React from "react";
import ParticipantsImg from "../assets/participants.jpg";

export default function KnowPlatform() {
  return (
    <section className="bg-blue-50 py-12 px-6 md:px-16 rounded-2xl max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* Left Content */}
        <div className="space-y-5">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
            Know about learning <br /> learning platform
          </h2>

          <ul className="space-y-3 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-400"></span>
              Free E-book, video & consultation
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-400"></span>
              Top instructors from around world
            </li>
            <li className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-teal-400"></span>
              Top courses from your team
            </li>
          </ul>

          <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition">
            Start learning now
          </button>
        </div>

        {/* Single Group Image */}
        <div className="w-full">
          <img
            src={ParticipantsImg}
            alt="Participants"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
