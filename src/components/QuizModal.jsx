import React from "react";

const QuizModal = ({ score, total, onClose, onRestart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent bg-opacity-8 backdrop-blur-sm">
      <div className="bg-[#061D33]/90 text-white p-6 rounded-lg w-80 text-center shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
        <p className="text-lg my-10">
          You got <span className="text-green-400">{score}</span> out of{" "}
          <span className="text-blue-400">{total}</span> correct!
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={onRestart}
            className="px-4 py-2 bg-[#0090AA] rounded-md hover:bg-[#007C92] transition-all"
          >
            Play Again
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-700 transition-all"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
