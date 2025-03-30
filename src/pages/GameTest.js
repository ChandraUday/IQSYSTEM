import React from "react";
import { useParams } from "react-router-dom";
import Game1 from "../components/Game1";
import Game2 from "../components/Game2";

const GameTest = () => {
  const { age } = useParams();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Game-Based IQ Test</h1>
      <Game1 age={age} />
      <Game2 age={age} />
    </div>
  );
};

export default GameTest;
