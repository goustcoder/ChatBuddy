import React from "react";
import { useNavigate } from "react-router-dom";

const How_it_works = () => {
  const navigate = useNavigate();

  const chatSteps = [
    {
      id: 1,
      section: "Create Your Profile",
      steps: [
        "Choose your preferred gender",
        "Enter your age and interests",
        "Share your hobbies and dreams",
      ],
      svg: "https://i.pinimg.com/474x/9d/86/8e/9d868edb99fa442461138e2f9a1e0be1.jpg",
    },
    {
      id: 2,
      section: "Select Your Companion",
      steps: [
        "Browse character personalities",
        "Choose your favorite companion",
        "Customize their traits",
      ],
      svg: "https://img.freepik.com/premium-psd/3d-render-heart-transparent-background_84029-4670.jpg",
    },
    {
      id: 3,
      section: "Start Chatting",
      steps: [
        "Enjoy 10-minute free trial",
        "Experience personalized conversations",
        "Subscribe to continue chatting",
      ],
      svg: "https://e7.pngegg.com/pngimages/461/831/png-clipart-computer-icons-messages-free-online-chat-free-purple-violet.png",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-[#0d0319] to-[#000000] "
      id="how-it-works"
    >
      <div className="container mx-auto px-4 py-3">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-gray-300 text-xl mx-auto max-w-2xl">
            Create your perfect AI companion in just a few simple steps
          </p>
        </div>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 p-4 justify-center mb-10">
          {chatSteps.map((elem, index) => (
            <div
              id={index}
              className="text-white flex flex-col justify-center items-center border-4 rounded-xl py-4"
            >
              <div className="mb-2 w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 p-1 flex items-center justify-center hover:scale-105 transition-transform duration-200">
                <img
                  className="w-full h-full object-contain rounded-full bg-white p-1"
                  src={elem.svg}
                  alt=""
                />
              </div>

              <h3 className="text-xl md:text-2xl mb-3 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 drop-shadow-md transition-transform duration-200 hover:scale-105">
                {elem.section}
              </h3>

              <ul className="list-disc mb-6 px-4 md:px-8">
                {elem.steps.map((step, index) => (
                  <li className="mb-1 text-[1rem] sm:text-[1.2rem]" key={index}>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex mb-4 justify-center items-center px-4 sm:px-2">
          <button
            onClick={() => navigate("/signup")}
            className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-pink-600 text-white rounded-full text-lg hover:bg-pink-700 transition-all transform hover:scale-105"
          >
            Start your journey now
          </button>
        </div>
      </div>
    </div>
  );
};

export default How_it_works;
