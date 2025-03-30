import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const TestOptions = () => {
  const { age } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Choose Your Test Type</h1>
      <button
        onClick={() => navigate(`/game-test/${age}`)}
        className="bg-green-500 text-white px-4 py-2 rounded mb-2"
      >
        Game-Based IQ Test
      </button>
      <button
        onClick={() => navigate(`/qa-test/${age}`)}
        className="bg-purple-500 text-white px-4 py-2 rounded"
      >
        Question & Answer Test
      </button>
    </div>
  );
};

export default TestOptions;
