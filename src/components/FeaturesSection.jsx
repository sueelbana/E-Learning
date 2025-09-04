import { MonitorSmartphone, Users, BarChart3 } from "lucide-react";
import Mockup from "../assets/group2.jpg";
import icon1 from "../assets/icons/icon1.jpg";
import icon2 from "../assets/icons/icon2.jpg";
import icon3 from "../assets/icons/icon3.jpg";

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Heading - Centered */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug">
            <span style={{ color: "rgba(47, 50, 125, 1)" }}>Our </span>
            <span style={{ color: "rgba(73, 187, 189, 1)" }}>Features</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            This very extraordinary feature can make learning activities more
            efficient
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          {" "}
          {/* ⬅️ reduced gap */}
          {/* Left side - Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src={Mockup}
              alt="Features mockup"
              className="w-full max-w-md"
            />
          </div>
          {/* Right side - Text */}
          <div className="self-start">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-900 leading-snug">
              <span style={{ color: "rgba(47, 50, 125, 1)" }}>A </span>
              <span style={{ color: "rgba(73, 187, 189, 1)" }}>
                user interface{" "}
              </span>
              <span style={{ color: "rgba(47, 50, 125, 1)" }}>
                designed for the classroom
              </span>
            </h2>

            {/* Right side - Features list */}
            <div className="mt-8">
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <img src={icon1} alt="Feature 1" className="w-6 h-6 mt-1" />
                  <span className="text-gray-700">
                    Teachers don’t get lost in the grid view and have a
                    dedicated Podium space.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={icon2} alt="Feature 2" className="w-6 h-6 mt-1" />
                  <span className="text-gray-700">
                    TA’s and presenters can be moved to the front of the class.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <img src={icon3} alt="Feature 3" className="w-6 h-6 mt-1" />
                  <span className="text-gray-700">
                    Teachers can easily see all students and class data at one
                    time.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
