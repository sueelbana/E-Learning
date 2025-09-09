import React from "react";
import {
  FaStar,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import HeroImage from "../assets/rec.jpg";
import Reviewer1 from "../assets/profile.jpg";
import Reviewer2 from "../assets/profile.jpg";

// Custom icons from assets
import moneyBackIcon from "../assets/icons/moneyback.jpg";
import devicesIcon from "../assets/icons/devices.jpg";
import certificateIcon from "../assets/icons/certificate.jpg";
import modulesIcon from "../assets/icons/modules.jpg";

// ✅ Import your extra components
import MarketingArticle from "../components/MarketingArticles";
import EverythingSection from "../components/EverythingSection";
import TopEducationOffers from "../components/TopEducationOffers";

const CourseDetails = () => {
  // Reviews data
  const reviews = [
    {
      name: "Lina",
      image: Reviewer1,
      time: "2 months ago",
      text: "Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively…",
      stars: 5,
    },
    {
      name: "James",
      image: Reviewer2,
      time: "1 month ago",
      text: "This platform helped me boost my skills significantly and the instructors are great!",
      stars: 5,
    },
  ];

  return (
    <section className="w-full">
      {/* Full-width Hero Image */}
      <div className="w-full h-64 md:h-80 lg:h-96">
        <img
          src={HeroImage}
          alt="Course Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="px-4 py-2 bg-gray-100 rounded-md">
              Overview
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-md">
              Curriculum
            </button>
            <button className="px-4 py-2 bg-gray-100 rounded-md">
              Instructor
            </button>
            <button className="px-4 py-2 bg-[rgba(73,187,189,1)] text-white rounded-md">
              Reviews
            </button>
          </div>

          {/* Rating Summary + Reviews */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            {/* Top: Rating summary and progress bars */}
            <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
              {/* Left: White Card */}
              <div className="bg-white rounded-lg p-6 shadow w-full md:w-1/3 text-center">
                <h3 className="text-xl font-semibold text-gray-500 mb-4">
                  4 out of 5
                </h3>

                {/* Stars below the heading */}
                <div className="flex justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                {/* Top Rating below stars */}
                <span className="text-gray-600">Top Rating</span>
              </div>

              {/* Right: Progress Bars */}
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center gap-4">
                    <span className="w-12">{star} Stars</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded">
                      <div className="h-2 bg-[rgba(73,187,189,1)] rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Reviews */}
            <div className="space-y-6">
              {reviews.map((review, i) => (
                <div key={i} className="bg-transparent p-4">
                  <div className="flex items-center gap-4 mb-2">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{review.name}</h4>
                      <div className="flex items-center gap-1 text-yellow-400">
                        {[...Array(review.stars)].map((_, j) => (
                          <FaStar key={j} />
                        ))}
                      </div>
                    </div>
                    <span className="ml-auto text-sm text-gray-500">
                      {review.time}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="bg-white p-6 h-fit">
          {/* Price Row */}
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-2xl font-bold">$49.65</h3>
            <p className="line-through text-gray-400 text-sm">$99.99</p>
            <p className="text-green-500 text-sm">50% Off</p>
          </div>
          <p
            className="text-sm mb-4 text-center"
            style={{ color: "rgba(73, 187, 189, 1)" }}
          >
            11 hours left at this price
          </p>

          <button className="w-full bg-[rgba(73,187,189,1)] text-white py-2 rounded-lg mb-6">
            Buy Now
          </button>

          <h4 className="font-semibold mb-2">This Course included</h4>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm">
              <img src={moneyBackIcon} alt="Money-back" className="w-5 h-5" />
              Money-back guarantee
            </li>
            <li className="flex items-center gap-2 text-sm">
              <img src={devicesIcon} alt="Devices" className="w-5 h-5" />
              Access on all devices
            </li>
            <li className="flex items-center gap-2 text-sm">
              <img
                src={certificateIcon}
                alt="Certificate"
                className="w-5 h-5"
              />
              Certificate of completion
            </li>
            <li className="flex items-center gap-2 text-sm">
              <img src={modulesIcon} alt="Modules" className="w-5 h-5" />
              32 modules
            </li>
          </ul>

          <h4 className="font-semibold mb-2">Training 5 or more people</h4>
          <p className="text-sm text-gray-600 mb-6">
            Class, launched less than a year ago by Blackboard co-founder
            Michael Chasen, integrates exclusively…
          </p>

          <h4 className="font-semibold mb-2">Share this course</h4>
          <div className="flex gap-4 text-gray-500 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-blue-600" />
            <FaTwitter className="cursor-pointer hover:text-sky-500" />
            <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
          </div>
        </aside>
      </div>

      {/* ✅ Add your extra sections below */}
      <div className="bg-blue-50">
        <MarketingArticle />
      </div>
      <EverythingSection />
      <TopEducationOffers />
    </section>
  );
};

export default CourseDetails;
