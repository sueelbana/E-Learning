import gradebookImage from "../assets/g.jpg";
import discussionImage from "../assets/g2.jpg";

export default function Options() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 space-y-20">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">
              <span style={{ color: "rgba(73, 187, 189, 1)" }}>
                Class Management <br />
              </span>
              <span style={{ color: "rgba(47, 50, 125, 1)" }}>
                Tools for Educators
              </span>
            </h2>
            <p className="text-neutral-600 max-w-lg">
              Class provides tools to help run and manage the class such as
              Class Roster, Attendance, and more. With the Gradebook, teachers
              can review and grade tests and quizzes in real-time.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={gradebookImage}
              alt="Gradebook"
              className="w-[450px] h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex justify-center">
            <img
              src={discussionImage}
              alt="Discussion"
              className="w-[450px] h-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-3">
              <span style={{ color: "rgba(47, 50, 125, 1)" }}>
                One-on-One <br />
              </span>
              <span style={{ color: "rgba(73, 187, 189, 1)" }}>
                Discussions
              </span>
            </h2>
            <p className="text-neutral-600 max-w-lg">
              Teachers and teacher assistants can talk with students privately
              without leaving the Zoom environment.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">
        <a
          href="/features"
          className="px-6 py-3 rounded-full border border-[rgba(73,187,189,1)] text-[rgba(73,187,189,1)] font-semibold hover:bg-[rgba(73,187,189,0.1)] transition"
        >
          See more features
        </a>
      </div>
    </section>
  );
}
