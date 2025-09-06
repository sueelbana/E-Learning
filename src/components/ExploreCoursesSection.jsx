import exploreImg from "../assets/course.jpg";

export default function ExploreCoursesSection() {
  return (
    <section className="bg-white dark:bg-neutral-900">
      <img
        src={exploreImg}
        alt="Explore Courses"
        className="w-full h-auto"
      />
    </section>
  );
}
