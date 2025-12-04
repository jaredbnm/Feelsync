import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MoodSelection from "./pages/MoodSelection";
import Results from "./pages/Results";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mood-selection" element={<MoodSelection />} />
      <Route path="/playlist/:moodId" element={<Results />} />
    </Routes>
  );
}

export default App;