import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MoodSelection from "./pages/MoodSelection";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/mood-selection" element={<MoodSelection />} />
    </Routes>
  );
}

export default App;