import React, { useState } from "react";
import { db } from "../firebaseConfig"; 
import { collection, addDoc } from "firebase/firestore";

const Game2 = ({ age }) => {
  const [clicks, setClicks] = useState(0);

  // Function to save game result to Firebase
  const saveGameResult = async () => {
    try {
      const resultData = {
        childName: "Test Child", // Replace with actual user input if needed
        ageGroup: age,
        testType: "Game - Reaction Speed",
        score: clicks, // Saving total clicks as the score
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
    <div className="bg-white p-4 shadow-lg rounded flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">Reaction Speed Game (Age {age})</h2>
      
      {/* Click Button */}
      <button
        onClick={() => setClicks(clicks + 1)}
        className="bg-red-500 text-white px-4 py-2 rounded mb-2"
      >
        Click Me!
      </button>

      <p className="mb-2">Clicks: {clicks}</p>

      {/* Save Game Result Button */}
      <button
        onClick={saveGameResult}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save & Submit Score
      </button>
    </div>
  );
};

export default Game2;
