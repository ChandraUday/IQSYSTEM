// import React, { useEffect, useState } from "react";
// import { db } from "../firebaseConfig";
// import { collection, getDocs } from "firebase/firestore";

// const AdminPanel = () => {
//   const [testResults, setTestResults] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch data from Firebase
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const resultsCollection = collection(db, "testResults"); // Collection name in Firebase
//         const resultsSnapshot = await getDocs(resultsCollection);
//         const resultsList = resultsSnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setTestResults(resultsList);
//       } catch (error) {
//         console.error("Error fetching test results:", error);
//       }
//       setLoading(false);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Panel - Test Results</h1>

//       {loading ? (
//         <p>Loading data...</p>
//       ) : (
//         <table className="table-auto border-collapse border border-gray-500 w-full max-w-4xl">
//           <thead>
//             <tr className="bg-gray-300">
//               <th className="border border-gray-500 px-4 py-2">Child Name</th>
//               <th className="border border-gray-500 px-4 py-2">Age Group</th>
//               <th className="border border-gray-500 px-4 py-2">Test Type</th>
//               <th className="border border-gray-500 px-4 py-2">Score</th>
//             </tr>
//           </thead>
//           <tbody>
//             {testResults.length > 0 ? (
//               testResults.map((result) => (
//                 <tr key={result.id} className="text-center">
//                   <td className="border border-gray-500 px-4 py-2">{result.childName || "N/A"}</td>
//                   <td className="border border-gray-500 px-4 py-2">{result.ageGroup}</td>
//                   <td className="border border-gray-500 px-4 py-2">{result.testType}</td>
//                   <td className="border border-gray-500 px-4 py-2">{result.score}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="4" className="border border-gray-500 px-4 py-2 text-center">
//                   No test results found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminPanel;


import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Test Results</h1>

      {loading ? (
        <p>Loading test results...</p>
      ) : testResults.length === 0 ? (
        <p>No test results found.</p>
      ) : (
        <table className="table-auto border-collapse border border-gray-400 w-full max-w-4xl">
          <thead>
            <tr className="bg-gray-300">
              <th className="border border-gray-400 px-4 py-2">Child Name</th>
              <th className="border border-gray-400 px-4 py-2">Age Group</th>
              <th className="border border-gray-400 px-4 py-2">Test Type</th>
              <th className="border border-gray-400 px-4 py-2">Score</th>
            </tr>
          </thead>
          <tbody>
            {testResults.map((result) => (
              <tr key={result.id} className="bg-white">
                <td className="border border-gray-400 px-4 py-2">
                  {result.childName || "N/A"}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {result.ageGroup}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {result.testType}
                </td>
                <td className="border border-gray-400 px-4 py-2">{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;
