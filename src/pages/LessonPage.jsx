import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Video, Mic, PhoneOff, Share, Settings } from "lucide-react";

// ✅ Import local images from assets
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
      {/* Left Section */}
      <div className="flex-1 flex flex-col gap-4">
        {/* ✅ Header Row */}
        <div className="flex items-center gap-3">
          {/* Back Button */}
          <Link
            to="/learn"
            className="w-10 h-10 flex items-center justify-center rounded-md shadow-lg"
            style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>

          {/* Header Card */}
          <div className="flex-1 bg-white rounded-md shadow px-6 py-3 flex items-center justify-between">
            {/* Title + Subtitle */}
            <div>
              <h2 className="text-base font-semibold">
                UX/UI Design Confernce Meeting
              </h2>
              <p className="text-xs text-gray-500 mt-0.5">
                9 Lesson &nbsp; 6h 30min
              </p>
            </div>

            {/* Settings Icon */}
            <Settings className="w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Video Container */}
        <div className="bg-white rounded-lg shadow p-4 flex-1">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden">
            <img
              src={mainSpeaker}
              alt="Main Speaker"
              className="w-full h-[400px] object-cover"
            />

            {/* Participants */}
            <div className="absolute right-3 top-3 space-y-2">
              <img
                src={participant1}
                className="w-16 h-16 rounded-lg object-cover"
                alt="Participant 1"
              />
              <img
                src={participant2}
                className="w-16 h-16 rounded-lg object-cover"
                alt="Participant 2"
              />
              <img
                src={participant3}
                className="w-16 h-16 rounded-lg object-cover"
                alt="Participant 3"
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-center gap-6 mt-4 bg-blue-50 p-3 rounded-lg">
            <Video className="w-6 h-6 text-gray-600" />
            <Mic className="w-6 h-6 text-gray-600" />
            <PhoneOff className="w-6 h-6 text-red-500" />
            <Share className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-80 space-y-6">
        {/* Course Contents */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-3">Course Contents</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex justify-between items-center border-b pb-2">
              <span>Get Started</span> <span>1 hr</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span>Illustrator Structures</span> <span>3 lessons</span>
            </li>
            <li className="flex justify-between items-center border-b pb-2">
              <span>Learn from basic</span> <span>25:00</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Using Illustrator</span> <span>2 lessons</span>
            </li>
          </ul>
        </div>

        {/* Book For You */}
        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="font-semibold mb-3">Book for you</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 border rounded-lg p-2">
              <img
                src={book1}
                className="w-14 h-14 rounded-md object-cover"
                alt="Book 1"
              />
              <div>
                <p className="text-sm font-semibold">All Benefits of PLUS</p>
                <span className="text-green-600 font-bold">$24</span>
              </div>
            </div>
            <div className="flex items-center gap-3 border rounded-lg p-2">
              <img
                src={book2}
                className="w-14 h-14 rounded-md object-cover"
                alt="Book 2"
              />
              <div>
                <p className="text-sm font-semibold">All Benefits of PLUS</p>
                <span className="text-green-600 font-bold">$24</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
