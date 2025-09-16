import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  Video,
  Mic,
  PhoneOff,
  Share,
  Settings,
  Clock,
  BookOpen,
  Book,
  ChevronDown,
  ChevronUp,
  Lock,
} from "lucide-react";

import mainSpeaker from "../assets/mainSpeaker.jpg";
import participant1 from "../assets/p1.jpg";
import participant2 from "../assets/p2.jpg";
import participant3 from "../assets/p3.jpg";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";

export default function LessonPage() {
  const { id } = useParams();

  return (
    <div className="relative flex min-h-screen bg-blue-50 p-4 gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/learn"
            className="w-10 h-10 flex items-center justify-center rounded-md shadow-lg"
            style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>

          <div className="bg-white rounded-md shadow px-6 py-6 flex items-center justify-between max-w-4xl w-full ml-auto">
            <div>
              <h2 className="text-lg font-semibold">
                UX/UI Design Conference Meeting
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                9 Lesson &nbsp; 6h 30min
              </p>
            </div>

            <Settings className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        <div className="p-4 flex-1">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={mainSpeaker}
              alt="Main Speaker"
              className="w-full h-full object-cover"
            />

            <div className="absolute right-3 top-3 space-y-2">
              <img
                src={participant1}
                className="w-26 h-26 rounded-lg object-cover"
                alt="Participant 1"
              />
              <img
                src={participant2}
                className="w-26 h-26 rounded-lg object-cover"
                alt="Participant 2"
              />
              <img
                src={participant3}
                className="w-26 h-26 rounded-lg object-cover"
                alt="Participant 3"
              />
            </div>
          </div>

          <div className="absolute bottom-16 left-1/2 transform -translate-x-[79%] bg-blue-50 px-8 py-4 rounded-xl shadow-lg flex gap-6 w-[45%] justify-center">
            <button className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow">
              <Video className="w-6 h-6 text-red-600" />
            </button>

            <button className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow">
              <Mic className="w-6 h-6 text-gray-600" />
            </button>

            <button className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow">
              <PhoneOff className="w-6 h-6 text-gray-500" />
            </button>

            <button className="bg-white w-12 h-12 rounded-lg flex items-center justify-center shadow">
              <Share className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-80 space-y-6">
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-3">Course Contents</h3>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span>2/5 COMPLETED</span>
            <span className="text-teal-500">
              <i className="fas fa-lock"></i>
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="bg-teal-400 h-2 rounded-full"
              style={{ width: "40%" }}
            ></div>
          </div>

          <div className="space-y-2 text-sm">
            <div className="border rounded-lg p-3">
              <div className="flex justify-between items-center">
                <span className="font-medium">Get Started</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>

              <div className="flex items-center text-gray-500 mt-2 gap-28">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>1 Hour</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="w-4 h-4 mr-1" />
                  <span>5 Lessons</span>
                </div>
              </div>
            </div>

            <div
              className="border rounded-lg p-4 min-h-40 flex flex-col"
              style={{ borderColor: "rgba(73, 187, 189, 1)" }}
            >
              <div className="flex justify-between items-center mb-2">
                <span
                  className="font-medium"
                  style={{ color: "rgba(73, 187, 189, 1)" }}
                >
                  Illustrator Structures
                </span>
                <div className="flex items-center gap-2 text-gray-500">
                  <ChevronUp className="w-4 h-4" />
                  <BookOpen className="w-4 h-4" />
                  <span>3 Lessons</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 text-xs mb-3">
                <Clock className="w-4 h-4 mr-1" />
                <span>2 Hour</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-600 flex-1">
                <li
                  className="flex justify-between items-center font-medium"
                  style={{ color: "rgba(73, 187, 189, 1)" }}
                >
                  <span>1. Lorem ipsum dolor sit amet</span>
                  <span className="font-semibold">65:00</span>
                </li>

                <li className="flex justify-between items-center">
                  <span>2. Lorem ipsum dolor</span>
                  <div className="flex items-center gap-2">
                    <span>25:00</span>
                    <Lock className="w-4 h-4 text-gray-500" />
                  </div>
                </li>
                <li className="flex justify-between items-center">
                  <span>3. Lorem ipsum dolor sit amet</span>
                  <div className="flex items-center gap-2">
                    <span>30:00</span>
                    <Lock className="w-4 h-4 text-gray-500" />
                  </div>
                </li>
              </ul>
            </div>

            <div className="border rounded-lg p-3 flex flex-col">
              <span className="font-medium">Using Illustrator</span>
              <div className="flex items-center gap-4 text-gray-500 mt-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>1 Hour</span>
                <BookOpen className="w-4 h-4" />
                <span>4 Lessons</span>
              </div>
            </div>

            <div className="border rounded-lg p-3 flex flex-col">
              <span className="font-medium">What is Pandas?</span>
              <div className="flex items-center gap-4 text-gray-500 mt-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>12:54</span>
                <BookOpen className="w-4 h-4" />
                <span>5 Lessons</span>
              </div>
            </div>

            <div className="border rounded-lg p-3 flex flex-col">
              <span className="font-medium">Work with Numpy</span>
              <div className="flex items-center gap-4 text-gray-500 mt-2 text-sm">
                <Clock className="w-4 h-4" />
                <span>59:00</span>
                <BookOpen className="w-4 h-4" />
                <span>3 Lessons</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-3">Book for you</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="border rounded-lg p-2 flex flex-col items-center">
              <img
                src={book1}
                className="w-20 h-20 rounded-md object-cover mb-2"
                alt="Book 1"
              />
              <p className="text-xs font-semibold text-center">
                All Benefits of PLUS
              </p>
              <span
                style={{ color: "rgba(73, 187, 189, 1)" }}
                className="font-bold"
              >
                $24
              </span>
            </div>
            <div className="border rounded-lg p-2 flex flex-col items-center">
              <img
                src={book2}
                className="w-20 h-20 rounded-md object-cover mb-2"
                alt="Book 2"
              />
              <p className="text-xs font-semibold text-center">
                All Benefits of PLUS
              </p>
              <span
                style={{ color: "rgba(73, 187, 189, 1)" }}
                className="font-bold"
              >
                $24
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
