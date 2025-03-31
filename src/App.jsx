import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Quiz, LeaderBoard } from "./pages";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    return (
      <div className="h-screen flex items-center justify-center text-center bg-gray-900 text-white text-2xl font-bold">
        Please open this application on a mobile device 📱
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/leader-board" element={<LeaderBoard />} />
    </Routes>
  );
}

export default App;
