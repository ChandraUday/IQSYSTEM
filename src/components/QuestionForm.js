import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const QuestionForm = ({ age }) => {
  const [answers, setAnswers] = useState({});

  // questions based on age group
  const questionsByAge = {
    "5-7": [
      { id: 1, question: "What comes after 3?", options: ["2", "3", "4"], correct: "4" },
      { id: 2, question: "Which shape has 4 sides?", options: ["Circle", "Triangle", "Square"], correct: "Square" },
    ],
    "8-10": [
      { id: 3, question: "What is 5 + 7?", options: ["10", "12", "15"], correct: "12" },
      { id: 4, question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter"], correct: "Mars" },
    ],
    "11-13": [
      { id: 5, question: "What is the square root of 64?", options: ["6", "8", "10"], correct: "8" },
      { id: 6, question: "Who wrote 'Hamlet'?", options: ["Shakespeare", "Dickens", "Hemingway"], correct: "Shakespeare" },
    ],
  };

  // Get questions based on age
  const questions = questionsByAge[age] || [];

  // Handle form submission
  const handleSubmit = async () => {
    try {
      const resultData = {
        childName: "Test Child", // only for exmple i have used
        ageGroup: age,
        testType: "Q&A",
        score: Object.values(answers).filter((ans, index) => ans === questions[index].correct).length, // Calculate score
      };
  
      await addDoc(collection(db, "testResults"), resultData);
      alert("Test result saved:", resultData);
    } catch (error) {
      console.error("Error saving test result:", error);
    }
  };

  return (
    <div className="question-form">
      {questions.length > 0 ? (
        questions.map((q) => (
          <div key={q.id} className="question-block">
            <p className="question">{q.question}</p>
            {q.options.map((option) => (
              <label key={option} className="option-label">
                <input
                  type="radio"
                  name={q.id}
                  value={option}
                  onChange={() => setAnswers({ ...answers, [q.id]: option })}
                />
                {option}
              </label>
            ))}
          </div>
        ))
      ) : (
        <p>No questions available for this age group.</p>
      )}
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default QuestionForm;
