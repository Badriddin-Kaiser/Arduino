import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import ModulesPage from "./components/pages/ModulesPage.jsx";

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