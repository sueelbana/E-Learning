import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function OnlineCoachingSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const lessons = [
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Detailed content about Lorem ipsum dolor sit amet.",
    },
    {
      title: "Consectetur adipiscing elit, sed do",
      content: "Detailed content about consectetur adipiscing elit.",
    },
    {
      title: "Eiusmod tempor Lorem ipsum",
      content: "Detailed content about eiusmod tempor Lorem ipsum.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    },
    {
      title: "Lorem ipsum dolor sit amet",
      content: "Detailed content about Lorem ipsum dolor sit amet.",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-neutral-900 font-buenos">
      <div className="max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-2xl font-bold text-neutral-900 dark:text-white mb-10">
          Online coaching lessons for remote learning
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {lessons.map((lesson, idx) => (
            <div
              key={idx}
              className="border-b border-neutral-200 dark:border-neutral-700 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: "rgba(85, 239, 196, 1)" }}
                  ></span>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {lesson.title}
                  </span>
                </div>
                {openIndex === idx ? (
                  <ChevronUp className="text-neutral-500" />
                ) : (
                  <ChevronDown className="text-neutral-500" />
                )}
              </button>

              {/* Content */}
              {openIndex === idx && (
                <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300">
                  {lesson.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
