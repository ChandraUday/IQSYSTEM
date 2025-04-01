import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (age) {
      navigate(`/test-options/${age}`);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Select Your Age Group</h1>
      <select
        value={age}
        onChange={(e) => setAge(e.target.value)}
        className="home-select">


        <option value="">Select Age</option>
        <option value="5-7">5-7 Years</option>
        <option value="8-10">8-10 Years</option>
        <option value="11-13">11-13 Years</option>
      </select>
      <button
        onClick={handleStart}
        className="home-button"
      >
        Start Test
      </button>
    </div>
  );
};

export default Home;
