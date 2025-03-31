import { useNavigate } from "react-router-dom";
import {
  Box,
  Circle,
  Icon,
  Life,
  Logo,
  Profile,
  Proicon,
  Spin,
  Star,
} from "../assets";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0 pointer-events-none">
        <img
          src={Icon}
          alt="bg-vector"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      <div className="w-full">
        <div className="w-[80%] mx-auto mb-[4rem]">
          <img src={Logo} alt="logo" className="w-[65%] h-[65%] mx-auto" />
        </div>
        <div
          className="relative w-[160px] h-[160px] mx-auto bg-no-repeat bg-contain flex items-center justify-center"
          style={{ backgroundImage: `url(${Circle})` }}
        >
          <img
            src={Profile}
            alt="profile"
            className="w-[60%] h-[60%] object-cover rounded-full"
          />
        </div>

        <div className="relative mt-[-55px] w-[90%] mx-auto flex flex-col items-center justify-center">
          <img src={Proicon} alt="" className="w-[65%]" />
          <div className="absolute top-6.5 left-[72px]">
            <h2 className=" text-base font-semibold">John Wiz</h2>
            <p className="text-[10px] mt-[-3px]">#5/1000players</p>
          </div>
        </div>
        <div className="w-[70%] mx-auto flex items-center justify-center gap-x-6 my-5">
          <img src={Star} alt="" className="w-[120px]" />
          <img src={Life} alt="" className="w-[80px]" />
        </div>
        <div className="w-[60%] mx-auto text-white mt-6  ">
          <div
            className="bg-[#D9A30F] z-50
           rounded-3xl justify-center py-2 font-semibold text-lg w-[75%] mx-auto flex items-center gap-x-5"
          >
            Level
            <span>200</span>
          </div>
        </div>
        <div className="mt-[2rem] w-[90%] mx-auto z-50 flex items-center flex-col gap-y-2.5">
          <button
            className="w-[80%] bg-[#00B4D4] border-2 border-blue-500 py-1.5 font-semibold  rounded-md"
            onClick={() => {
              navigate("/quiz");
            }}
          >
            Play Now
          </button>
          <button
            className="w-[80%] bg-[#3F9243] border-2 border-green-800 py-1.5 font-semibold  rounded-md"
            onClick={() => navigate("/leader-board")}
          >
            View Leaderboard
          </button>
        </div>
        <div className="w-[90%] mx-auto flex items-center justify-between mt-[4.5rem]">
          <div className="bg-[#00B4D4]  h-[62px] rounded-md w-[70px] py-1">
            <img
              src={Box}
              alt="market-icon"
              className="w-[89%] mx-auto mt-[-40px]  flex items-center justify-center "
            />
            <div className="w-[98%] mx-auto  bg-[#061D33] mt-2 rounded-b-md">
              <h4 className="text-center text-sm">Market</h4>
            </div>
          </div>
          <div className="bg-[#00B4D4]  h-[61px] rounded-md w-[70px] py-1">
            <img
              src={Spin}
              alt="market-icon"
              className="w-[89%] mx-auto mt-[-36px]  flex items-center justify-center "
            />
            <div className="w-[98%] mx-auto  bg-[#061D33] mt-2.5 rounded-b-md">
              <h4 className="text-center text-sm">Spin now</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
