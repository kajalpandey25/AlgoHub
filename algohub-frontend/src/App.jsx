import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Visualization from "./components/Visualization";
import CodeEditor from "./components/CodeEditor";
import Leaderboard from "./components/Leaderboard";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visualization" element={<Visualization />} />
          <Route path="/code-editor" element={<CodeEditor />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
