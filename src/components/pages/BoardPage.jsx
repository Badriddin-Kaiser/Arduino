import { useState } from "react";
import "./BoardPage.css";
// Было: import Footer from "./FooterPage";
// Стало:
import Footer from "../resourse/FooterPage.jsx";

const boardsData = [
  {
    id: "uno",
    name: "Arduino Uno",
    desc: "Most popular board for beginners",
    img: "img/Arduino uno2.jpg",
    details: {
      about:
        "Arduino Uno is the industry standard for prototyping, built around the ATmega328P microcontroller with stable 5V logic.",
      specs: [
        { label: "MCU", val: "ATmega328P" },
        { label: "Voltage", val: "5V" },
        { label: "Digital Pins", val: "14 (6 PWM)" },
        { label: "Analog Pins", val: "6 (A0-A5)" },
        { label: "Clock Speed", val: "16 MHz" },
      ],
      wiring:
        "Connect LED Anode (long pin) to Pin 13, Cathode to GND via a 220Ω resistor.",
      code: "void setup() {\n  pinMode(13, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}",
    },
  },
  {
    id: "nano",
    name: "Arduino Nano",
    desc: "Compact version of Uno",
    img: "img/Arduino nano2.jpg",
    details: {
      about:
        "Arduino Nano is a compact, breadboard-friendly board offering identical functionality to the Uno.",
      specs: [
        { label: "MCU", val: "ATmega328P" },
        { label: "Voltage", val: "5V" },
        { label: "Digital Pins", val: "14 (6 PWM)" },
        { label: "Analog Pins", val: "8 (A0-A7)" },
        { label: "Clock Speed", val: "16 MHz" },
      ],
      wiring:
        "Connect Potentiometer Pin 1 to 5V, Pin 2 (middle) to A0, Pin 3 to GND.",
      code: "void setup() {\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int val = analogRead(A0);\n  Serial.println(val);\n  delay(100);\n}",
    },
  },
  {
    id: "mega",
    name: "Arduino Mega",
    desc: "Many pins for large projects",
    img: "img/Arduino mega.jpg",
    details: {
      about:
        "Arduino Mega 2560 is designed for complex projects like 3D printers and robotics requiring many I/O pins.",
      specs: [
        { label: "MCU", val: "ATmega2560" },
        { label: "Voltage", val: "5V" },
        { label: "Digital Pins", val: "54 (15 PWM)" },
        { label: "Analog Pins", val: "16" },
        { label: "Flash", val: "256 KB" },
      ],
      wiring:
        "Connect Servo Signal to Pin 9, Power to 5V, Ground to GND.",
      code: "#include <Servo.h>\nServo servo;\n\nvoid setup() {\n  servo.attach(9);\n}\n\nvoid loop() {\n  servo.write(90);\n  delay(1000);\n}",
    },
  },
  {
    id: "esp32",
    name: "ESP32",
    desc: "WiFi + Bluetooth powerful board",
    img: "img/esp32.jpg",
    details: {
      about:
        "ESP32 is a powerful 32-bit microcontroller with integrated Wi-Fi and Bluetooth for IoT solutions.",
      specs: [
        { label: "MCU", val: "Xtensa 32-bit LX6" },
        { label: "Voltage", val: "3.3V" },
        { label: "Wireless", val: "Wi-Fi + BT 4.2" },
        { label: "GPIO Pins", val: "34" },
        { label: "Clock", val: "240 MHz" },
      ],
      wiring:
        "Power via Micro-USB. Monitor status logs via Serial interface at 115200 baud.",
      code: '#include <WiFi.h>\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.begin("SSID", "PASS");\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n  }\n  Serial.println("Connected!");\n}',
    },
  },
];

function Board() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="boards-page">
      {/* Главная секция с карточками плат */}
      <div className="boards-main-content">
        <h1 className="boards-title">Arduino Boards</h1>
        <p className="boards-subtitle">Choose your board and start learning</p>

        <div className="boards-grid">
          {boardsData.map((b) => (
            <div
              className="boards-card"
              key={b.id}
              onClick={() => setSelected(b)}
            >
              <div className="boards-img-box">
                <img src={b.img} alt={b.name} />
              </div>
              <h3>{b.name}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* МОДАЛЬНОЕ ОКНО */}
      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="modal-left-col">
              <div className="modal-img-wrapper">
                <img src={selected.img} alt={selected.name} />
                <h2>{selected.name}</h2>
              </div>

              <div className="modal-specs-box">
                <div className="modal-specs-title">Specifications</div>
                {selected.details.specs.map((s, idx) => (
                  <div key={idx} className="modal-spec-item">
                    <span className="spec-name">{s.label}:</span>
                    <span className="spec-value">{s.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-right-col">
              <div className="modal-section">
                <h3>About</h3>
                <p>{selected.details.about}</p>
              </div>

              <div className="modal-section">
                <h3>Connection</h3>
                <p>{selected.details.wiring}</p>
              </div>

              <div className="modal-section">
                <h3>Code Example</h3>
                <pre className="modal-code-block">
                  <code>{selected.details.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ФУТЕР */}
      <Footer />
    </div>
  );
}

export default Board;