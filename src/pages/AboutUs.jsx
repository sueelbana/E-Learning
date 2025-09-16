import React from "react";
import { Twitter, Youtube, Instagram } from "lucide-react"; 
import BgImage from "../assets/bg.jpg";
import ProfileImage from "../assets/about.jpg";
import TabsNavigation from "../components/TabsNavigation";
import LiteratureCourses from "../components/LiteratureCourses";

export default function AboutUs() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-white">
      <div
        className="relative mt-0 flex items-center p-6 shadow-lg"
        style={{
          width: "1100px",
          height: "415px",
          borderRadius: "20px",
          backgroundImage: `url(${BgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex-shrink-0 mr-6">
          <img
            src={ProfileImage}
            alt="Instructor"
            className="w-48 h-48 rounded-full border-4 border-white object-cover"
          />
        </div>

        <div className="flex-1 bg-gray-300 bg-opacity-70 rounded-lg p-6 text-left relative">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-black">
                John Anderson
              </h2>
              <p className="text-gray-700">
                Assistant Professor at Moonhart University
              </p>
            </div>
            <button className="bg-teal-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-teal-600">
              Enroll Now
            </button>
          </div>

          <p className="mt-4 text-black max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud
          </p>

          <div className="mt-6 flex gap-6 text-sm text-black">
            <span>⭐ 4.7 Instructor Rating</span>
            <span>📘 120 Students</span>
            <span>🎓 8 Courses</span>
          </div>

          <div className="absolute bottom-4 right-6 flex gap-4 text-lg">
            <a href="#" style={{ color: "rgba(73, 187, 189, 1)" }}>
              <Twitter size={22} />
            </a>
            <a href="#" style={{ color: "rgba(73, 187, 189, 1)" }}>
              <Youtube size={22} />
            </a>
            <a href="#" style={{ color: "rgba(73, 187, 189, 1)" }}>
              <Instagram size={22} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mt-8">
        <TabsNavigation />
        <LiteratureCourses />
      </div>
    </div>
  );
}
