import React from "react";
import { Icon } from "../assets";

const Quiz = () => {
  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      <div className="w-[96%] mx-auto flex flex-col items-center justify-center">
        <div className="w-[98%] mx-auto flex items-center justify-between"></div>
      </div>
    </div>
  );
};

export default Quiz;
