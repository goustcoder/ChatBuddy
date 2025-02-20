import React from "react";
import { motion } from "framer-motion";

const HerosecTwo = () => {
  const chatSteps = [
    { id: 1, text: "Choose your preferred gender" },
    { id: 2, text: "Select your favorite character" },
    { id: 3, text: "Share your interests & personality" },
    { id: 4, text: "Start chatting with your AI companion" },
  ];

  return (
    <div className=" w-full  bg-gradient-to-r from-black to-purple-900 py-20 px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="left   min-h-[400px] ">
        <h1 className="text-3xl md:text-6xl text-center lg:text-left font-bold text-white mb-6">
          Find Your Perfect AI Companion
        </h1>
        <h3 className="text-xl text-gray-300 mb-14 text-center lg:text-left">
          Create a meaningful connection with an AI companion that understands
          you. Choose your preferred character and start your journey today.
        </h3>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <button className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-indigo-600 text-white rounded-full text-lg hover:bg-indigo-700 transition-all transform hover:scale-105">
            Choose Male Character
          </button>
          <button className="w-full sm:w-auto cursor-pointer px-8 py-4 bg-pink-600 text-white rounded-full text-lg hover:bg-pink-700 transition-all transform hover:scale-105">
            Choose Female Character
          </button>
        </div>
      </div>
      <div className="right min-h-[400px] min-w-[300px] border-2 border-white p-6 rounded-2xl flex flex-col gap-4 bg-neutral-800 shadow-lg">
        {chatSteps.map((elem, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-xl hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <span className="text-white font-bold text-xl bg-neutral-800 w-10 h-10 flex items-center justify-center rounded-full shadow-md">
              {elem.id}
            </span>
            <h1 className="text-white font-medium text-lg">{elem.text}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HerosecTwo;
