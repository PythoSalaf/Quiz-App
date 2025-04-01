import { Icon, Logo } from "../assets";

const Intro = ({ onContinue }) => {
  return (
    <div className="bg-[#061D33]  relative h-screen flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      <div className="w-full">
        <div className="w-[80%] mx-auto mb-[4rem]">
          <img src={Logo} alt="logo" className="w-[65%] h-[65%] mx-auto" />
        </div>
        <div className="my-6 w-full">
          <h4 className="text-[#2BDEFF] text-center text-2xl font-semibold">
            Ultimate.Dev.Quiz
          </h4>
        </div>
        <div className="relative w-[84%] py-4 mt-10 mx-auto border-3 border-[#80EBFF] rounded-tr-4xl rounded-bl-4xl flex items-center">
          <div className="w-[90%] mx-auto ">
            <h3 className="text-center text-[#D0D0D0]">
              Test Your Coding Skills! <br /> Answer tech-related <br />{" "}
              Question and climb the <br /> leaderboard
            </h3>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-10">
          <button
            className="mt-5 w-[84%] mx-auto py-1 bg-[#0090AA] text-white font-semibold rounded-lg hover:bg-[#007C92] transition-all border-2 border-[#1460AA]"
            onClick={onContinue}
          >
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
