import React from "react";
import { Icon } from "../assets";

const LeaderBoard = () => {
  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-75"
        />
      </div>
    </div>
  );
};

export default LeaderBoard;
