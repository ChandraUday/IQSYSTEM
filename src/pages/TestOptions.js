import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./TestOptions.css"; 

const TestOptions = () => {
  const { age } = useParams();
  const navigate = useNavigate();

  return (
    <div className="test-options-container">
      <h1 className="test-options-title">Choose Your Test Type</h1>
      <button
        onClick={() => navigate(`/game-test/${age}`)}
        className="test-button game-button"
      >
        Game-Based IQ Test
      </button>

      <button
        onClick={() => navigate(`/qa-test/${age}`)}
        className="test-button qa-button"
      >
        Question & Answer Test
      </button>
    </div>
  );
};

export default TestOptions;
