export default function SchedualPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h3 className="text-sm font-semibold mb-4">Change Simplification</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 rounded-md bg-teal-100 text-sm">
            <span>Lesson 01: Introduction about XD</span>
            <span className="text-gray-600">30 mins</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-md bg-red-100 text-sm">
            <span>Lesson 01: Introduction about 3D</span>
            <span className="text-gray-600">30 mins</span>
          </div>
        </div>

        <h3 className="text-sm font-semibold mt-8 mb-4">PRACTICE QUIZ</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-2 rounded-md bg-blue-100 text-sm">
            <span>Lesson 01: Introduction about XD</span>
            <span className="text-gray-600">30 mins</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded-md bg-orange-100 text-sm">
            <span>Lesson 01: Introduction about 3D</span>
            <span className="text-gray-600">30 mins</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header Section */}
        <div
          className="px-8 py-6 text-white"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          <h1 className="text-2xl font-bold">
            Learn about Adobe XD & Prototyping
          </h1>
          <p className="text-sm opacity-90">Introduction about XD</p>
        </div>

        {/* Form Section */}
        <div className="p-8 bg-blue-50">
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-2">Create new event</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do
              eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing
              elit, sed do eiusmodLorem
            </p>

            {/* Form Container */}
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              {/* Form */}
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Event Name"
                  className="w-full border rounded-md p-2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="datetime-local"
                    className="border rounded-md p-2"
                  />
                  <input
                    type="datetime-local"
                    className="border rounded-md p-2"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full border rounded-md p-2"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select className="border rounded-md p-2">
                    <option>30 mins</option>
                    <option>1 hour</option>
                  </select>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border rounded-md p-2"
                  />
                </div>
                <textarea
                  placeholder="Event Description"
                  className="w-full border rounded-md p-2 h-24"
                />
                <button
                  type="submit"
                  className="bg-[rgba(73,187,189,1)] text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition"
                >
                  Save Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
