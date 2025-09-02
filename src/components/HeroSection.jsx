export default function HeroSection() {
  return (
    <section className="bg-background dark:bg-neutral-900 py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn Anytime, Anywhere{" "}
            <span className="text-brand">with Experts</span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
            Join thousands of learners worldwide and access high-quality courses
            designed by industry leaders.
          </p>
          <div className="flex gap-4">
            <a
              href="/courses"
              className="px-6 py-3 rounded-xl bg-brand text-white font-semibold shadow hover:opacity-90"
            >
              Explore Courses
            </a>
            <a
              href="/membership"
              className="px-6 py-3 rounded-xl border border-brand text-brand font-semibold hover:bg-brand/10"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Image / Illustration */}
        <div className="flex-1">
          <img
            src="https://via.placeholder.com/500x350"
            alt="Learning illustration"
            className="rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
