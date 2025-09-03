export default function StatsSection() {
  const stats = [
    { number: "15K+", label: "Students" },
    { number: "75%", label: "Total success" },
    { number: "35", label: "Main questions" },
    { number: "26", label: "Chief experts" },
    { number: "16", label: "Years of experience" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-800 font-buenos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          Our Success
        </h2>
        <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">
          Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
          sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
          ultrices eu ornare tristique vel nisl orci.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-buenos text-sky-600">
                {s.number}
              </h3>
              <p className="mt-1 text-neutral-600 font-buenos font-semibold text-black">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
