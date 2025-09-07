import { Check } from "lucide-react";
import OnlineCoachingCTA from "../components/OnlineCoachingCTA"; 
import OnlineCoachingSection from "../components/OnlineCoachingSection";
import StudentTestimonials from "../components/StudentTestimonials";
import BecomeCard from "../components/BecomeCard";

export default function Pricing() {
  const plans = [
    {
      id: 1,
      title: "Like a pussy",
      price: "Free",
      duration: "/ forever",
      buttonText: "Try for free",
      features: [
        "Components-driven system",
        "Sales-boosting landing pages",
        "Awesome Feather icons pack",
      ],
      buttonStyle: "hover:bg-sky-50",
      buttonTextColor: "rgba(73, 187, 189, 1)",
      checkBg: "bg-gray-400", // gray background
    },
    {
      id: 2,
      title: "Individual",
      price: "$24",
      duration: "/ month",
      buttonText: "Regular license",
      best: true,
      features: [
        "Components-driven system",
        "Sales-boosting landing pages",
        "Awesome Feather icons pack",
        "Themed into 3 different styles",
        "Will help to learn Figma",
      ],
      buttonStyle: "hover:opacity-90",
      buttonBgColor: "rgba(73, 187, 189, 1)",
      buttonTextColor: "#fff",
      checkBg: "bg-yellow-400", // yellow background
    },
    {
      id: 3,
      title: "Corporate",
      price: "$12",
      duration: "/ editor",
      buttonText: "Extended license",
      features: [
        "Components-driven system",
        "Sales-boosting landing pages",
        "Awesome Feather icons pack",
        "Themed into 3 different styles",
      ],
      buttonStyle: "hover:bg-sky-50",
      buttonTextColor: "rgba(73, 187, 189, 1)",
      checkBg: "bg-green-300", // lighter green background
    },
  ];

  return (
    <>
      <section className="w-full py-16 px-6 bg-white">
        {/* Title */}
        <h2
          className="text-2xl md:text-3xl font-bold text-center mb-12"
          style={{ color: "rgba(73, 187, 189, 1)" }}
        >
          Affordable pricing
        </h2>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center max-w-4xl mx-auto items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition ${
                plan.best ? "scale-105 border border-gray-200" : "border-0"
              } max-w-xs mx-auto h-full`}
            >
              {/* Badge */}
              {plan.best && (
                <span
                  className="absolute top-4 right-4 bg-white border text-black text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ borderColor: "rgba(73, 187, 189, 1)" }}
                >
                  BEST!
                </span>
              )}

              {/* Title */}
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: "rgba(73, 187, 189, 1)" }}
              >
                {plan.title}
              </h3>

              {/* Price */}
              <div className="text-2xl font-bold mb-5">
                {plan.price}
                <span className="text-gray-500 text-sm font-medium">
                  {plan.duration}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-5 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    {/* Custom Check Circle */}
                    <div
                      className={`w-5 h-5 flex items-center justify-center rounded-full ${plan.checkBg}`}
                    >
                      <Check className="w-3 h-3 text-black" strokeWidth={3} />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                className={`w-full py-2 px-4 rounded-lg font-medium transition ${plan.buttonStyle}`}
                style={{
                  backgroundColor: plan.buttonBgColor || "transparent",
                  color: plan.buttonTextColor,
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </section>
      <OnlineCoachingCTA />
      <OnlineCoachingSection />
      <StudentTestimonials />
      <BecomeCard />
    </>
  );
}
