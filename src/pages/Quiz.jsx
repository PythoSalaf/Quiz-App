import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Icon, Life, Star } from "../assets";
import { GoHomeFill } from "react-icons/go";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { techQuestions } from "../components/Dummytext";
import { BsStopwatchFill } from "react-icons/bs";
const Quiz = () => {
  const [toggle, setToggle] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const shuffleQuestions = (questions) => {
    let shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledQuestions(shuffleQuestions(techQuestions));
  }, []);

  const handleNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("No more questions!");
    }
  };

  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-75"
        />
      </div>
      <div className="w-[96%] mx-auto flex flex-col items-center justify-center">
        <div className="w-[90%] mx-auto flex items-center justify-between">
          <div
            className=" text-[#CCF7FF] bg-[#0090AA] cursor-pointer w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => navigate("/")}
          >
            <GoHomeFill className="w-[75%] h-[75%]" />
          </div>
          <div className="flex items-center gap-x-3">
            <img src={Star} alt="" className="w-[100px] " />
            <img src={Life} alt="" className="w-[75px]" />
          </div>
          <div
            className=" text-[#CCF7FF] bg-[#0090AA] cursor-pointer w-8 h-8 rounded-full flex items-center justify-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? (
              <HiSpeakerXMark className="w-[75%] h-[75%]" />
            ) : (
              <HiSpeakerWave className="w-[75%] h-[75%]" />
            )}
          </div>
        </div>
        <div className="w-[90%] mx-auto mt-6 flex items-center h-20 bg-red-600 ">
          <div className="w-[85%]"></div>
          <div className="w-[15%]"></div>
        </div>
        <div
          className="relative w-[90%]  py-4 mt-10 mx-auto border-3 border-[#80EBFF] rounded-tr-2xl rounded-bl-2xl flex items-center "
          // style={{ backgroundImage: `url(${Container})` }}
        >
          <div className="w-[80%]  mx-auto ">
            <h2 className="text-lg">
              {shuffledQuestions[currentIndex]?.question}
            </h2>
          </div>
        </div>
        <div className="w-[25%] mx-auto py-1.5 flex items-center text-[#80EBFF] text-lg justify-center gap-x-2 border-3 border-[#80EBFF] rounded-b-md mt-[-2px]">
          <BsStopwatchFill />
          <p className="">1:00</p>
        </div>
        <ol className="w-[90%] mx-auto mt-7 space-y-4 list-none">
          {shuffledQuestions[currentIndex]?.options?.map((option, index) => (
            <li
              key={index}
              className="flex items-center w-full relative bg-[#0A3055] border-2 border-[#80EBFF] rounded-tr-2xl rounded-bl-2xl py-1  gap-x-5 px-1"
            >
              {/* Hexagon Shape with Alphabet */}
              <div className="relative w-11 h-11 ">
                <div className="absolute inset-0 bg-blue-500 clip-hexagon flex items-center justify-center text-white font-bold text-lg">
                  {String.fromCharCode(65 + index)}
                </div>
              </div>

              {/* Option Text */}
              <p className="ml-4 text-lg text-white">{option}</p>
            </li>
          ))}
        </ol>
        <div className="w-full justify-center items-center flex mt-7">
          <button
            className="w-[90%] mx-auto bg-[#00B4D4] py-2 text-lg font-semibold text-white rounded-md"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
