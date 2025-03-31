import React from "react";
import { Icon, Leadone, Leadthree, Leadtwo, Profile } from "../assets";

const LeaderBoard = () => {
  const LeaderData = [
    {
      id: 1,
      name: "Booman",
      image: Profile,
      position: "4th",
      point: "160px",
    },
    {
      id: 2,
      name: "Alonja",
      image: Leadone,
      position: "5th",
      point: "150px",
    },
    {
      id: 3,
      name: "Alero",
      image: Leadtwo,
      position: "6th",
      point: "130px",
    },
    {
      id: 4,
      name: "Alex",
      image: Leadthree,
      position: "7th",
      point: "120px",
    },
  ];
  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      <div className="w-[90%] mx-auto flex flex-col items-center justify-center ">
        <h2 className="text-[#55E5FF] text-2xl font-semibold">
          Leadership Board
        </h2>
        <div className="boarder bg-[#55E5FF] rounded-r-lg w-full py-1 px-2 mt-8">
          <div className="flex items-center justify-between">
            <h4 className="bg-[#00D8FF] px-1.5 py-0.5 rounded-lg">Weekly</h4>
            <h4 className="">Monthly</h4>
            <h4 className="">Yearly</h4>
          </div>
        </div>

        <div className="flex items-end gap-x-8 w-[90%] mx-auto mt-16">
          <div className="bg-[#004855] w-[160px] h-[50px]"></div>
          <div className="bg-[#004855] w-[160px] h-[90px]"></div>
          <div className="bg-[#004855] w-[160px] h-[50px]"></div>
        </div>
        <div className="mt-14 w-full">
          {LeaderData.map((item) => (
            <div
              className="flex items-center justify-between w-full relative bg-[#0A3055] border-2 border-[#80EBFF] rounded-tr-2xl rounded-bl-2xl py-1   px-1.5 mt-4"
              key={item.id}
            >
              <div className="relative w-12 h-12 ">
                <div className="absolute inset-0 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  <img
                    src={item.image}
                    alt=""
                    className="w-[90%] h-[90%] rounded-full"
                  />
                </div>
              </div>

              <p className="ml-4 text-lg text-white">{item.name}</p>
              <div className="">
                <p className="ml-4 text-lg text-white font-semibold">
                  {item.position}
                </p>
                <p className="">{item.point}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
