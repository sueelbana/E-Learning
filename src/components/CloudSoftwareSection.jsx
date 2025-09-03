import documentIcon from "../assets/icons/document.jpg";
import calendarIcon from "../assets/icons/calander.jpg";
import usersIcon from "../assets/icons/users.jpg";

export default function CloudSoftwareSection() {
  const features = [
    {
      icon: documentIcon,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts.",
    },
    {
      icon: calendarIcon,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance.",
    },
    {
      icon: usersIcon,
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-900 font-buenos">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white">
          All-In-One <span className="text-sky-500">Cloud Software.</span>
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
          TOTC is one powerful online software suite that combines all the tools
          needed to run a successful school or office.
        </p>

        {/* Feature Cards */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="w-64 p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-md text-center"
            >
              {/* Icon container */}
              <div className="mx-auto flex items-center justify-center mb-3">
                <img
                  src={f.icon}
                  alt={f.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3
                className="text-base md:text-lg font-semibold"
                style={{ color: "rgba(47, 50, 125, 1)" }}
              >
                {f.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
