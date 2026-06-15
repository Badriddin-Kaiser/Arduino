import "./mainPage.css";
import { useState } from "react";
import Boards from "./BoardPage";
import SensorsPage from "./SensorsPage";
function MainPage() {
  const [page, setPage] = useState("home");

  return (
    <div className="mainPage-container">

      {/* NAVBAR */}
      <div className="navbar">
        <div className="logo">ITCC Arduino</div>
        <div className="menu">
         <span className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>Home</span>
          <span className={page === "boards" ? "active" : ""} onClick={() => setPage("boards")}>Boards</span>
          <span className={page === "sensors" ? "active" : ""} onClick={() => setPage("sensors")}>Sensors</span>
          <span className={page === "modules" ? "active" : ""} onClick={() => setPage("modules")}>Modules</span>
          <span className={page === "projects" ? "active" : ""} onClick={() => setPage("projects")}>Projects</span>
          <span className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>About</span>
        </div>
      </div>

      {/* HOME PAGE */}
      {page === "home" && (
        <>
          {/* HERO */}
          <div className="hero">

            <div className="hero-text">
              <h1>
                Learn Arduino <br />
                <span>the Easy Way</span>
              </h1>

              <p>Explore Sensors, Modules & Projects.</p>

              <button className="btn" onClick={() => setPage("boards")}>
                Get Started
              </button>
            </div>

            <div className="hero-image">
              <img
                src="/img/arduino-uno.jpg"
                alt="Arduino"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475";
                }}
              />
            </div>

          </div>

          {/* TOP CARDS */}
          <div className="cards">

            <div
            className="card big"
            onClick={() => setPage("boards")}
            >
              <img
                src="/img/arduino-uno-and-nano.jpg"
                alt="Arduino boards"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc";
                }}
              />
              <p>UNO & Nano</p>
            </div>

            <div className="card big">
              <img
                src="/img/Sensors kit.jpg"
                alt="Sensors kit"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758";
                }}
              />
              <h3>Sensors <span>Kit</span></h3>
              <p>37 Sensor Kit</p>
            </div>

            <div className="card big">
              <img
                src="/img/modules-guide.jpg"
                alt="Modules"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc";
                }}
              />
              <h3>Modules <span>Guide</span></h3>
              <p>Advanced Modules</p>
            </div>

          </div>

          {/* FEATURED */}
          <h2 className="title">Featured Sensors & Modules</h2>

          <div className="cards small">

            <div className="card small">
              <img
                src="/img/KY-001.jpg"
                alt="KY-001"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1581092160607-ee22621dd758";
                }}
              />
              <h4>KY-001</h4>
              <p>Temperature Sensor</p>
            </div>

            <div className="card small">
              <img
                src="/img/KY-004.jpg"
                alt="Button"
                onError={(e) => {
                  e.target.src = "KY-004";
                }}
              />
              <h4>KY-004</h4>
              <p>Button Module</p>
            </div>

            <div className="card small">
              <img
                src="/img/HC-SR04.jpg"
                onError={(e) => {
                  e.target.src = "HR-SR04";
                }}
              />
              <h4>HC-SR04</h4>
              <p>Ultrasonic Sensor</p>
            </div>

            <div className="card small">
              <img
                src="/img/servo-motor.jpg"
                alt="Servo"
                onError={(e) => {
                  e.target.src = "Servo motor";
                }}
              />
              <h4>Servo Motor</h4>
              <p>High Torque</p>
            </div>

          </div>
        </>
      )}

      {/* OTHER PAGES */}
      
      {page === "boards" && <Boards />}
      {page === "sensors" && <SensorsPage />}
      {page === "modules" && <h1 style={{ padding: "50px" }}>Modules Page</h1>}
      {page === "projects" && <h1 style={{ padding: "50px" }}>Projects Page</h1>}
      {page === "about" && <h1 style={{ padding: "50px" }}>About Page</h1>}
    
    </div>
    
  );
}

export default MainPage;