export default function StatsSection() {
  const stats = [
    { number: "500+", label: "Courses" },
    { number: "50K+", label: "Students" },
    { number: "200+", label: "Instructors" },
    { number: "4.8/5", label: "Average Rating" },
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s, i) => (
          <div key={i}>
            <h3 className="text-3xl font-bold text-brand">{s.number}</h3>
            <p className="text-neutral-600 dark:text-neutral-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
