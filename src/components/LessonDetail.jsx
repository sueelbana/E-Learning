import courseImage from "../assets/tech.JPG";

export default function LessonDetail() {
  return (
    <div className="p-8 space-y-6 bg-blue-50 min-h-screen">
      {/* Image Section */}
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={courseImage}
          alt="Course Preview"
          className="w-full h-screen object-cover" // ✅ fills full screen height
        />
      </div>

      {/* Content Section */}
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-bold text-gray-800">
            06 Super Coins on the way
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
            eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
            do eiusmod
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800">
            Who this course is for?
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
            eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
            do eiusmodL
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-800">Archievable</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do
            eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed
            do eiusmodLWho this course is for? Lorem ipsum dolor sit amet,
            consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
            eiusmodeiusmodadipiscing elit, sed do eiusmodL
          </p>
        </section>
      </div>
    </div>
  );
}
