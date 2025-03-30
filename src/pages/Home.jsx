import { useNavigate } from "react-router";
import { Circle, Icon, Logo, Profile } from "../assets";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#061D33] h-screen relative flex items-start py-8 justify-center text-white">
      <div className="absolute inset-0">
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

        <div className="" style={{ backgroundImage: `url(${Circle})` }}></div>
        <div className="w-[60%] mx-auto text-white mt-6  ">
          <button className="bg-[#D9A30F] rounded-3xl justify-center py-2 font-semibold text-lg w-[75%] mx-auto flex items-center gap-x-5">
            Level
            <span>200</span>
          </button>
        </div>
        <div className="mt-[4rem] w-[90%] mx-auto flex items-center flex-col gap-y-2.5">
          <button
            className="w-[80%] bg-[#00B4D4] border-2 border-blue-500 py-1.5 font-semibold cursor-pointer rounded-md"
            onClick={() => navigate("/quiz")}
          >
            Play Now
          </button>
          <button
            className="w-[80%] bg-[#3F9243] border-2 border-green-800 py-1.5 font-semibold cursor-pointer rounded-md"
            onClick={() => navigate("/leader-board")}
          >
            View Leaderboard
          </button>
        </div>
        <div className="w-[90%] mx-auto flex items-center justify-between mt-[4rem]">
          <div className="bg-[#00B4D4] rounded-xl w-[100px] py-4"></div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
