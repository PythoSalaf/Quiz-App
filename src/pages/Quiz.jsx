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
  const [userAnswers, setUserAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    setShuffledQuestions(shuffleQuestions(techQuestions));
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNext();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const shuffleQuestions = (questions) => {
    let shuffled = [...questions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    const correctAnswer = shuffledQuestions[currentIndex]?.answer;
    const isCorrect = selectedAnswer === correctAnswer;
    setUserAnswers([...userAnswers, isCorrect]);

    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimeLeft(30);
      setSelectedAnswer(null);
    } else {
      alert("Quiz Completed!");
    }
  };

  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="w-[96%] mx-auto flex flex-col items-center justify-center">
        <div className="w-[90%] mx-auto flex items-center justify-between">
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

        {/* Score Bar */}
        <div className="w-[90%] mx-auto mt-6 flex items-center">
          <div className="relative w-[85%] h-6 bg-gray-700 border-2 border-[#80EBFF] rounded-lg flex overflow-hidden">
            {userAnswers.map((correct, index) => (
              <div
                key={index}
                className={`h-full w-[5%] ${
                  correct ? "bg-green-500" : "bg-red-500"
                } border-r border-black`}
              ></div>
            ))}
          </div>
          <div className="ml-2 px-3 py-1 bg-[#00B4D4] text-black font-bold rounded-md">
            {currentIndex + 1}/{shuffledQuestions.length}
          </div>
        </div>

        {/* Question */}
        <div className="relative w-[90%] py-4 mt-10 mx-auto border-3 border-[#80EBFF] rounded-tr-2xl rounded-bl-2xl flex items-center">
          <div className="w-[80%] mx-auto">
            <h2 className="text-lg">
              {shuffledQuestions[currentIndex]?.question}
            </h2>
          </div>
        </div>

        {/* Timer */}
        <div className="w-[25%] mx-auto py-1.5 flex items-center text-[#80EBFF] text-lg justify-center gap-x-2 border-3 border-[#80EBFF] rounded-b-md mt-[-2px]">
          <BsStopwatchFill />
          <p>
            {Math.floor(timeLeft / 30)}:
            {(timeLeft % 30).toString().padStart(2, "0")}
          </p>
        </div>

        {/* Options */}
        <ol className="w-[90%] mx-auto mt-7 space-y-4 list-none">
          {shuffledQuestions[currentIndex]?.options?.map((option, index) => (
            <li
              key={index}
              className={`flex items-center w-full relative bg-[#0A3055] border-2 border-[#80EBFF] rounded-tr-2xl rounded-bl-2xl py-1 gap-x-5 px-1 cursor-pointer ${
                selectedAnswer === option
                  ? "bg-[#007C92]"
                  : "hover:bg-[#0090AA]"
              }`}
              onClick={() => handleAnswer(option)}
            >
              <div className="relative w-11 h-11">
                <div className="absolute inset-0 bg-blue-500 clip-hexagon flex items-center justify-center text-white font-bold text-lg">
                  {String.fromCharCode(65 + index)}
                </div>
              </div>
              <p className="ml-4 text-lg text-white">{option}</p>
            </li>
          ))}
        </ol>

        {/* Next Button (Always Visible) */}
        <button
          className="mt-5 w-[90%] mx-auto py-2 bg-[#0090AA] text-white font-semibold rounded-lg hover:bg-[#007C92] transition-all border-2 border-[#1460AA]"
          onClick={handleNext}
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default Quiz;
