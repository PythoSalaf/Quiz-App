import { useState } from "react";
import {
  First,
  Icon,
  Leadone,
  Leadthree,
  Leadtwo,
  Life,
  Profile,
  Second,
  Star,
  Third,
} from "../assets";
import { useNavigate } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";

const LeaderBoard = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
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
    <div className="bg-[#061D33] relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-75"
        />
      </div>

      <div className="w-[90%] mx-auto flex flex-col items-center justify-center ">
        <div className="w-[95%] mx-auto flex items-center justify-between">
          <div
            className="text-[#CCF7FF] bg-[#0090AA] cursor-pointer w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => navigate("/")}
          >
            <GoHomeFill className="w-[75%] h-[75%]" />
          </div>
          <div className="flex items-center gap-x-3">
            <img src={Star} alt="" className="w-[100px]" />
            <img src={Life} alt="" className="w-[75px]" />
          </div>
          <div
            className="text-[#CCF7FF] bg-[#0090AA] cursor-pointer w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <HiSpeakerXMark className="w-[75%] h-[75%]" />
            ) : (
              <HiSpeakerWave className="w-[75%] h-[75%]" />
            )}
          </div>
        </div>
        <h2
          className="text-[#1978D4] text-2xl py-1 mt-4 font-semibold "
          style={{ WebkitTextStroke: "2px #55E5FF" }}
        >
          LeadershipBoard
        </h2>
        <div className="boarder bg-[#55E5FF] rounded-r-lg w-full py-1 px-2 mt-8">
          <div className="flex items-center justify-between">
            <h4 className="bg-[#00D8FF] px-1.5 py-0.5 rounded-lg">Weekly</h4>
            <h4 className="">Monthly</h4>
            <h4 className="">Yearly</h4>
          </div>
        </div>

        <div className="flex items-end justify-center  gap-x-8 w-[90%] mx-auto mt-16">
          <div className="flex flex-col items-center justify-center">
            <img src={Third} alt="" className="mb-[-30px] z-20 w-[70px]" />
            <div className="bg-[#004855] w-[80px] h-[100px] z-10">
              <div className="w-full flex flex-col items-center justify-center pt-8">
                <h3 className="text-sm text-[#00D8FF]">Musa Tao</h3>
                <p className="text-[#2BDEFF]">200xp</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start">
            <img src={First} alt="" className="mb-[-30px] z-20" />
            <div className="bg-[#004855] w-[80px] h-[180px] z-10">
              <div className="w-full flex flex-col items-center justify-center pt-16">
                <h3 className="text-sm text-[#00D8FF]">Johndoe</h3>
                <p className="text-[#2BDEFF]">500xp</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img src={Second} alt="" className="mb-[-30px] z-20 h-[100px] z" />
            <div className="bg-[#004855] w-[80px] h-[102px] z-10">
              <div className="w-full flex flex-col items-center justify-center pt-8">
                <h3 className="text-sm text-[#00D8FF]">JohnWiz</h3>
                <p className="text-[#2BDEFF]">300xp</p>
              </div>
            </div>
          </div>
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
