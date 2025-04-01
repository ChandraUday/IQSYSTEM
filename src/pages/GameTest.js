import React from "react";
import { useParams } from "react-router-dom";
import Game1 from "../components/Game1";
import Game2 from "../components/Game2";
import "./GameTest.css";

const GameTest = () => {
  const { age } = useParams();

  return (
    <div className="game-test">
      <h1 className="game-test-title">Game-Based IQ Test</h1>
      <Game1 age={age} />
      <Game2 age={age} />
    </div>
  );
};

export default GameTest;
