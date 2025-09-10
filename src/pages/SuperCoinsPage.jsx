import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export default function SuperCoinsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-92 bg-white border-r p-4 overflow-y-auto">
        {/* Small Rectangle with Arrow */}
        <Link
          to="/change" // ✅ goes back to ChangePage
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
          {Array.from({ length: 13 }).map((_, i) => (
            <div
              key={i}
              className={`flex justify-between items-center px-5 py-4 rounded-md text-sm ${
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
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Share and Refer with Social Icons */}
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Share and Refer</h2>
            <div className="flex gap-3 text-teal-500 text-xl">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="hover:text-blue-400 transition" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="hover:text-blue-600 transition" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-red-500 transition" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane className="hover:text-sky-500 transition" />
              </a>
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="hover:text-green-500 transition" />
              </a>
            </div>
          </div>

          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
            eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
            do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing
            elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing
            elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodeiusmodadipiscing elit, sed do eiusmodLorem eiusmodLorem
            dolor sit amet, consectetur adipiscing
          </p>

          {/* Example Cards */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 space-y-3"
            >
              {/* Title and Icons aligned */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">
                  06 Super Coins on the way
                </h3>
                <div className="flex gap-3 text-teal-500 text-lg">
                  <FaTwitter />
                  <FaFacebookF />
                  <FaYoutube />
                  <FaInstagram />
                  <FaTelegramPlane />
                  <FaWhatsapp />
                </div>
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
                eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmodadipiscing
                elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmodadipiscing elit, sed do
                eiusmodeiusmodadipiscing elit, sed do eiusmodL{" "}
              </p>
              <div
                className={`p-4 rounded-md ${
                  i % 2 === 0
                    ? "bg-orange-100 text-orange-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
