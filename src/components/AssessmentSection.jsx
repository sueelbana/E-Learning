import italyImage from "../assets/aaa.jpg";

export default function AssessmentSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Image from assets (extra maximized) */}
        <img src={italyImage} alt="Italy" className="mt-4 w-[500px] h-auto" />

        {/* Right: Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-4">
            <span style={{ color: "rgba(47, 50, 125, 1)" }}>Assesments, <br></br></span>
            <span style={{ color: "rgba(73, 187, 189, 1)" }}>
              Quizzes,{" "}
            </span>
            <span style={{ color: "rgba(47, 50, 125, 1)" }}>
              Tests
            </span>
          </h2>
          <p className="text-neutral-600 max-w-md mx-auto md:mx-0">
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
    </section>
  );
}
