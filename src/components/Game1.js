import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "../pages/GameTest.css";

const Game1 = ({ age }) => {
  const [score, setScore] = useState(0);

  const handleGameLogic = async () => {
    setScore(score + 10);
  
    try {
      const resultData = {
        childName: "Test Child",
        ageGroup: age,
        testType: "Game",
        score: score + 10,
      };
  
      await addDoc(collection(db, "testResults"), resultData);
      console.log("Game result saved:", resultData);
    } catch (error) {
      console.error("Error saving game result:", error);
    }
  };

  return (
    <div className="game-container">
      <h2 className="game-title">Memory Matching Game (Age {age})</h2>
      <button onClick={handleGameLogic} className="game-button">
        Play
      </button>
      <p className="game-score">Score: {score}</p>
    </div>
  );
};

export default Game1;
