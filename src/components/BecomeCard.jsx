import React from "react";
import teacherImage from "../assets/teacher2.jpg";
import coursectorImage from "../assets/teacher2.jpg";

const BecomeCard = ({
  title,
  description,
  buttonText,
  buttonAction,
  imageUrl,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="relative flex justify-center items-center">
        <img
          className="w-42 h-40 object-cover rounded-lg mt-6"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <h2 className="font-semibold text-md mb-2">{title}</h2>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-end">
        <button
          onClick={buttonAction}
          className="text-white px-3 py-1 text-sm rounded-lg transition"
          style={{ backgroundColor: "rgba(73, 187, 189, 1)" }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const handleApplyTeacher = () => {
    alert("Teacher application");
  };

  const handleApplyCoursector = () => {
    alert("Coursector application");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-white">
      <div className="flex space-x-4">
        <BecomeCard
          title="Become a Teacher"
          description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
          buttonText="Apply as Teacher"
          buttonAction={handleApplyTeacher}
          imageUrl={teacherImage}
        />
        <BecomeCard
          title="Become a Coursector"
          description="Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively..."
          buttonText="Apply as Coursector"
          buttonAction={handleApplyCoursector}
          imageUrl={coursectorImage}
        />
      </div>
    </div>
  );
};

export default App;
