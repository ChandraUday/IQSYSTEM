
import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "./AdminPanel.css";

const AdminPanel = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestResults = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "testResults"));
        const results = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTestResults(results);
      } catch (error) {
        console.error("Error fetching test results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestResults();
  }, []);

  return (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel - Test Results</h1>

      {loading ? (
        <p>Loading test results...</p>
      ) : testResults.length === 0 ? (
        <p>No test results found.</p>
      ) : (
        <table className="results-table">
          <thead>
            <tr>
              <th>Child Name</th>
              <th>Age Group</th>
              <th>Test Type</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((result) => (
              <tr key={result.id} >
                <td>
                  {result.childName || "N/A"}
                </td>
                <td>
                  {result.ageGroup}
                </td>
                <td>
                  {result.testType}
                </td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
