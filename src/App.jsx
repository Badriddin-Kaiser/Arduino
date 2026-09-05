import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import ModulesPage from "./components/pages/ModulesPage";

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