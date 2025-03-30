import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

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
    <div className="bg-white p-4 shadow-lg rounded mb-4">
      <h2 className="text-xl font-bold">Memory Matching Game (Age {age})</h2>
      <button onClick={handleGameLogic} className="bg-blue-500 text-white px-4 py-2 rounded">
        Play
      </button>
      <p>Score: {score}</p>
    </div>
  );
};

export default Game1;
