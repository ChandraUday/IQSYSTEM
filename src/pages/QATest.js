import React from "react";
import { useParams } from "react-router-dom";
import QuestionForm from "../components/QuestionForm";
import "./QATest.css";

const QATest = () => {
  const { age } = useParams(); // Get age from URL

  return (
    <div className="qa-test-container">
      <h1 className="qa-test-title">IQ Questions for Age {age}</h1>
      <QuestionForm age={age} />
    </div>
  );
};

export default QATest;
