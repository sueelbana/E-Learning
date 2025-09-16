import heroImg from "../assets/girl.jpg";
import { Play, Calendar, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-[rgba(73,187,189,1)] py-12 md:py-16 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-24 md:h-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="white" d="M0,160 Q720,320 1440,160 L1440,320 L0,320Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10 -mt-16">
        <div className="flex-1 text-center md:text-left text-white">
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-yellow-500">Studying</span> Online is now much
            easier
          </h1>

          <p className="text-base md:text-lg text-white/90 mb-8 max-w-md mx-auto md:mx-0">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="/courses"
              className="px-6 py-3 rounded-full border border-white text-white font-semibold hover:bg-white/10 transition"
            >
              Join for free
            </a>

            <a
              href="/about"
              className="flex items-center gap-2 px-6 py-3 font-semibold text-black hover:bg-black/5 transition rounded-full"
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white">
                <Play
                  size={18}
                  className="text-[rgba(73,187,189,1)]"
                  fill="rgba(73,187,189,1)"
                />
              </span>
              <span>Watch how it works</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end h-full items-start relative">
          <img
            src={heroImg}
            alt="Learning Illustration"
            className="h-full object-contain -mt-6 relative z-0"
          />

          <div className="absolute top-40 left-4 bg-gray-200/80 p-4 rounded-xl shadow-md flex items-center gap-3 backdrop-blur-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-white/70 rounded-lg">
              <Calendar className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="font-bold text-black">250k</p>
              <p className="text-gray-700 text-sm">Assisted Student</p>
            </div>
          </div>
          <div className="absolute top-80 right-4 bg-gray-200/80 p-4 rounded-xl shadow-md flex items-center gap-3 backdrop-blur-sm">
            <div className="w-10 h-10 flex items-center justify-center bg-white/70 rounded-lg">
              <Mail className="text-orange-500" size={20} />
            </div>
            <div>
              <p className="font-bold text-black">Congratulations</p>
              <p className="text-gray-700 text-sm">Your admission completed</p>
            </div>
          </div>

          <div className="absolute top-96 left-0 bg-gray-200/80 p-4 rounded-xl shadow-md flex items-center gap-3 backdrop-blur-sm">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-black">User Experience Class</p>
              <p className="text-gray-700 text-sm">Today at 12.00 PM</p>
              <button className="mt-2 px-3 py-1 bg-pink-500 text-white rounded-full text-xs">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
