import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./Components/pages/MainPage";
import ModulesPage from "./Components/pages/ModulesPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/modules" element={<ModulesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;