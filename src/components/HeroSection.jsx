import heroImg from "../assets/girl.jpg";
import { Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[rgba(73,187,189,1)] py-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text content */}
        <div className="flex-1 text-center md:text-left text-white">
          {/* Main headline */}
          <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-yellow-500">Studying</span> Online is now much
            easier
          </h1>

          {/* Supporting text */}
          <p className="text-base md:text-lg text-white/90 mb-8 max-w-md mx-auto md:mx-0">
            TOTC is an interesting platform that will teach you in more an
            interactive way
          </p>

          {/* CTA buttons */}
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
              {/* Play button with white bg + custom arrow color */}
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

        {/* Right: Illustration / Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Learning Illustration"
            className="w-1000 max-w-xl "
          />
        </div>
      </div>
    </section>
  );
}
