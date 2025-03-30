import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (age) {
      navigate(`/test-options/${age}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Select Your Age Group</h1>
      <select
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="">Select Age</option>
        <option value="5-7">5-7 Years</option>
        <option value="8-10">8-10 Years</option>
        <option value="11-13">11-13 Years</option>
      </select>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start Test
      </button>
    </div>
  );
};

export default Home;
