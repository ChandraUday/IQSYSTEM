import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TestOptions from "./pages/TestOptions";
import GameTest from "./pages/GameTest";
import QATest from "./pages/QATest";
import Results from "./pages/Results";
import AdminPanel from "./pages/AdminPanel"
import UserSelection from "./pages/UserSelection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserSelection />} />
        <Route path="/user" element={<Home />} />
        <Route path="/test-options/:age" element={<TestOptions />} />
        <Route path="/game-test/:age" element={<GameTest />} />
        <Route path="/qa-test/:age" element={<QATest />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </Router>
    // // <TestOptions />
    // <Results />
  );
}

export default App;
