import React from "react";
import { useParams } from "react-router-dom";
import QuestionForm from "../components/QuestionForm";

const QATest = () => {
  const { age } = useParams(); // Get age from URL

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">IQ Questions for Age {age}</h1>
      <QuestionForm age={age} />
    </div>
  );
};

export default QATest;
