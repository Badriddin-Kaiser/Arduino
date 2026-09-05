import "./MainPage.css";
import { useState } from "react";
import Boards from "./BoardPage";
import SensorsPage from "./SensorsPage";
import ModulesPage from "./ModulesPage";

function MainPage() {
  const [page, setPage] = useState("home");

  return (
    <div className="mainPage-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div 
          className="logo" 
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          ITCC Arduino
        </div>

        <div className="menu">
          <span className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>
            Home
          </span>

          <span className={page === "boards" ? "active" : ""} onClick={() => setPage("boards")}>
            Boards
          </span>

          <span className={page === "sensors" ? "active" : ""} onClick={() => setPage("sensors")}>
            Sensors
          </span>

          <span className={page === "modules" ? "active" : ""} onClick={() => setPage("modules")}>
            Modules
          </span>

          <span className={page === "projects" ? "active" : ""} onClick={() => setPage("projects")}>
            Projects
          </span>

          <span className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>
            About
          </span>
        </div>
      </nav>

      {/* HOME */}
      {page === "home" && (
        <div className="hero">
          <div className="hero-text">
            <h1>
              Learn Arduino <br />
              <span>the Easy Way</span>
            </h1>

            <p>Explore Sensors, Modules & Projects.</p>

            <button className="btn" onClick={() => setPage("boards")}>
              Get Started →
            </button>
          </div>

          <div className="hero-image">
            <img
              src="img/arduino-uno.jpg"
              alt="Arduino Uno"
              onError={(e) =>
                (e.currentTarget.src =
                  "https://images.unsplash.com/photo-1518770660439-4636190af475")
              }
            />
          </div>
        </div>
      )}

      {/* PAGES */}
      {page === "boards" && <Boards />}
      {page === "sensors" && <SensorsPage />}
      {page === "modules" && <ModulesPage />}

      {page === "projects" && (
        <div style={{ padding: "50px", textAlign: "center" }}>
          <h1>Projects Page</h1>
        </div>
      )}

      {page === "about" && (
        <div style={{ padding: "50px", textAlign: "center" }}>
          <h1>About Page</h1>
        </div>
      )}
    </div>
  );
}

export default MainPage; // <-- Здесь был косяк (стояло Main)