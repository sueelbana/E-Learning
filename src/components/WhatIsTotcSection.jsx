import instructorImg from "../assets/instructor.jpg";
import studentImg from "../assets/group.jpg";

export default function WhatIsTotcSection() {
  return (
    <section className="py-16 bg-white font-buenos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl">
          <span style={{ color: "rgba(47, 50, 125, 1)" }}>What is </span>
          <span style={{ color: "rgba(73, 187, 189, 1)", fontWeight: "bold" }}>
            TOTC?
          </span>
        </h2>
        <p className="mt-3 text-neutral-600 max-w-3xl mx-auto">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="relative rounded-2xl overflow-hidden shadow-md w-80">
            <img
              src={instructorImg}
              alt="For Instructors"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-lg md:text-xl font-semibold">
                FOR INSTRUCTORS
              </h3>
              <button className="mt-3 px-5 py-2 border border-white rounded-full text-sm font-medium hover:bg-white hover:text-black transition">
                Start a class today
              </button>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-md w-80">
            <img
              src={studentImg}
              alt="For Students"
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white text-center">
              <h3 className="text-lg md:text-xl font-semibold">FOR STUDENTS</h3>
              <button className="mt-3 px-5 py-2 border rounded-full text-sm font-medium bg-sky-500 border-sky-500 hover:bg-sky-600 transition">
                Enter access code
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
