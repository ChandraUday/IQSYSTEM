import React, { useState } from "react";
import { db } from "../firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";
import "../pages/GameTest.css";

const Game2 = ({ age }) => {
  const [clicks, setClicks] = useState(0);

  // Function to save game result to Firebase
  const saveGameResult = async () => {
    try {
      const resultData = {
        childName: "Test Child", // we can put actual user input if needed
        ageGroup: age,
        testType: "Game - Reaction Speed",
        score: clicks, // Saving total clicks as the score so just simple click game
        timestamp: new Date(),
      };

      await addDoc(collection(db, "testResults"), resultData);
      alert("Game results saved successfully!");
      setClicks(0); // Reset game
    } catch (error) {
      console.error("Error saving game result:", error);
    }
  };

  return (
    <div className="game-container">
      <h2  className="game-title">Reaction Speed Game (Age {age})</h2>
      
     
      <button
        onClick={() => setClicks(clicks + 1)}
        className="game-button"
      >
        Click Me!
      </button>

      <p className="game-score">Clicks: {clicks}</p>

      {/* Save Game Result Button */}
      <button
        onClick={saveGameResult}
        className="game-button"
      >
        Save & Submit Score
      </button>
    </div>
  );
};

export default Game2;
