import StudentImg from "../assets/girl2.jpg";

export default function ToolsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 items-center gap-8">
        <div className="relative pl-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            <span className="text-[rgba(73,187,189,1)]">Tools </span>
            <span className="text-[rgba(47,50,125,1)]">For Teachers </span>
            <br />
            <span className="text-[rgba(47,50,125,1)]">And Learners</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
            Class has a dynamic set of teaching tools built to be deployed and
            used during class. Teachers can handout assignments in real-time for
            students to complete and submit.
          </p>
        </div>

        <div className="relative flex justify-center">
          <img
            src={StudentImg}
            alt="Student"
            className="relative z-10 max-w-xs md:max-w-sm"
          />
        </div>
      </div>
    </section>
  );
}
