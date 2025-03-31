import { Routes, Route } from "react-router-dom";
import { Home, Quiz, LeaderBoard } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/leader-board" element={<LeaderBoard />} />
      </Routes>
    </>
  );
}

export default App;
