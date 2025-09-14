import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

// Import images
import savannahImg from "../assets/savannah.jpg";
import student1 from "../assets/student1.jpg";
import student2 from "../assets/student2.jpg";
import student3 from "../assets/student3.jpg";
import student4 from "../assets/student4.jpg";

export default function Card() {
  return (
    // Full-width blue background
    <section className="w-full bg-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-left text-xl md:text-xl font-bold text-gray-800 mb-8">
          What our students have to say
        </h2>

        {/* White card expanded */}
        <div className="bg-white rounded-2xl shadow-md p-10 flex flex-col md:flex-row items-center gap-10">
          {/* Left - Image */}
          <div className="relative flex-shrink-0">
            <img
              src={savannahImg}
              alt="Savannah Nguyen"
              className="relative z-10 w-66 h-64 object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">
              Savannah Nguyen
            </h3>
            <p className="text-sm text-gray-500">tanya.hill@example.com</p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipising elit, <br></br>
              sed do eiusmod tempor <br></br>Lorem ipsum dolor sit amet,
              consectetur adipising elit, <br></br>sed do eiusmod tempor{" "}
              <br></br>Lorem ipsum dolor sit amet, consectetur adipising elit,{" "}
              <br></br>sed do eiusmod tempor
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-4 text-teal-500 text-lg">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right - Avatars list */}
          <div className="flex flex-col gap-4">
            <img
              src={student1}
              alt="student 1"
              className="w-12 h-12 rounded-full border shadow-sm"
            />
            <img
              src={student2}
              alt="student 2"
              className="w-12 h-12 rounded-full border shadow-sm"
            />
            <img
              src={student3}
              alt="student 3"
              className="w-12 h-12 rounded-full border shadow-sm"
            />
            <img
              src={student4}
              alt="student 4"
              className="w-12 h-12 rounded-full border shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
