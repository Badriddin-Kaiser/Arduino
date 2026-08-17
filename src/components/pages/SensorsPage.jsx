import { useState } from "react";
import "./SensorsPage.css";
// Должно быть:
import Footer from "../resourse/FooterPage.jsx";

const sensorsData = [
  { 
    id: 1, 
    name: "KY-001", 
    desc: "Temperature Sensor", 
    img: "img/KY-001.jpg",
    details: {
      about: "KY-001 temperature sensor module based on the DS18B20 digital thermometer chip. Measures temperatures from -55°C to 125°C.",
      specs: [
        { label: "Chip", val: "DS18B20" },
        { label: "Voltage", val: "3.0V - 5.5V" },
        { label: "Protocol", val: "1-Wire Serial" },
        { label: "Range", val: "-55°C to +125°C" }
      ],
      wiring: "Connect Signal Pin (S) to Digital Pin 2, VCC (+) to 5V, Ground (-) to GND.",
      code: "#include <OneWire.h>\n#include <DallasTemperature.h>\n\n#define ONE_WIRE_BUS 2\nOneWire oneWire(ONE_WIRE_BUS);\nDallasTemperature sensors(&oneWire);\n\nvoid setup() {\n  Serial.begin(9600);\n  sensors.begin();\n}\n\nvoid loop() {\n  sensors.requestTemperatures();\n  Serial.println(sensors.getTempCByIndex(0));\n  delay(1000);\n}"
    }
  },
  { id: 2, name: "KY-002", desc: "Vibration Sensor", img: "img/KY-002.jpg" },
  { id: 3, name: "KY-004", desc: "Button Module", img: "img/KY-004.jpg" },
  { id: 4, name: "KY-005", desc: "Infrared IR Transmitter", img: "img/KY-005.jpg" },
  { id: 5, name: "KY-006", desc: "Passive Buzzer", img: "img/KY-006.jpg" },
  { id: 6, name: "KY-008", desc: "Laser Transmitter", img: "img/KY-008.jpg" },
  { id: 7, name: "KY-009", desc: "RGB LED Module", img: "img/KY-009.jpg" },
  { id: 8, name: "KY-010", desc: "Light Blocking Sensor", img: "img/KY-010.jpg" },
  { id: 9, name: "KY-011", desc: "2-color LED", img: "img/KY-011.jpg" },
  { id: 10, name: "KY-012", desc: "Active Buzzer", img: "img/KY-012.jpg" },
  { id: 11, name: "KY-013", desc: "Analog Temp Sensor", img: "img/KY-013.jpg" },
  { 
    id: 12, 
    name: "KY-015", 
    desc: "Temp & Humidity (DHT11)", 
    img: "img/KY-015.jpg",
    details: {
      about: "Digital temperature and humidity sensor module built with DHT11.",
      specs: [
        { label: "Sensor", val: "DHT11" },
        { label: "Voltage", val: "3.3V - 5V" },
        { label: "Humidity", val: "20-90% RH" },
        { label: "Temp", val: "0-50 °C" }
      ],
      wiring: "Connect Data Pin (S) to Digital Pin 2, VCC (+) to 5V, GND (-) to GND.",
      code: '#include "DHT.h"\n#define DHTPIN 2\n#define DHTTYPE DHT11\nDHT dht(DHTPIN, DHTTYPE);\n\nvoid setup() {\n  Serial.begin(9600);\n  dht.begin();\n}\n\nvoid loop() {\n  float h = dht.readHumidity();\n  float t = dht.readTemperature();\n  Serial.println(t);\n  delay(2000);\n}'
    }
  },
  { id: 13, name: "KY-016", desc: "RGB LED Module", img: "img/KY-016.jpg" },
  { id: 14, name: "KY-017", desc: "Mercury Tilt Switch", img: "img/KY-017.jpg" },
  { id: 15, name: "KY-018", desc: "Photoresistor Light Sensor", img: "img/KY-018.jpg" },
  { id: 16, name: "KY-019", desc: "5V Relay Module", img: "img/KY-019.jpg" },
  { id: 17, name: "KY-020", desc: "Ball Switch", img: "img/KY-020.jpg" },
  { id: 18, name: "KY-021", desc: "Mini Reed Switch", img: "img/KY-021.jpg" },
  { id: 19, name: "KY-022", desc: "IR Receiver", img: "img/KY-022.jpg" },
  { id: 23, name: "KY-026", desc: "Flame Sensor", img: "img/KY-026.jpg" },
  { id: 24, name: "KY-027", desc: "Magic Light Cup", img: "img/KY-027.jpg" },
  { id: 25, name: "KY-028", desc: "Digital Temp Sensor", img: "img/KY-028.jpg" },
  { id: 26, name: "KY-029", desc: "2-color LED Module", img: "img/KY-029.jpg" },
  { id: 27, name: "KY-031", desc: "Knock Sensor", img: "img/KY-031.jpg" },
  { id: 28, name: "KY-032", desc: "Obstacle Avoidance", img: "img/KY-032.jpg" },
  { id: 29, name: "KY-033", desc: "Line Tracking Sensor", img: "img/KY-033.jpg" },
  { id: 30, name: "KY-034", desc: "7-color Flash LED", img: "img/KY-034.jpg" },
  { id: 31, name: "KY-035", desc: "Hall Magnetic Sensor", img: "img/KY-035.jpg" },
  { id: 32, name: "KY-036", desc: "Touch Sensor", img: "img/KY-036.jpg" },
  { id: 33, name: "KY-037", desc: "Microphone Sound Sensor", img: "img/KY-037.jpg" },
  { id: 34, name: "KY-038", desc: "Sound Detection Sensor", img: "img/KY-038.jpg" },
  { id: 35, name: "HC-SR04", desc: "Ultrasonic Distance Sensor", img: "img/HC-SR04.jpg" }
];

function SensorsPage() {
  const [selected, setSelected] = useState(null);

  const getDetails = (item) => {
    if (!item) return {};
    return item.details || {
      about: `${item.name} (${item.desc}) is a sensor module designed for interactive electronic circuits and Arduino prototyping.`,
      specs: [
        { label: "Module Type", val: item.desc },
        { label: "Voltage", val: "5V DC" },
        { label: "Signal Type", val: "Digital / Analog" },
        { label: "Interface", val: "3-Pin Header" }
      ],
      wiring: "Connect Signal pin (S) to Arduino Pin 2 / A0, VCC (+) to 5V, and Ground (-) to GND.",
      code: "void setup() {\n  Serial.begin(9600);\n  pinMode(2, INPUT);\n}\n\nvoid loop() {\n  int val = digitalRead(2);\n  Serial.println(val);\n  delay(200);\n}"
    };
  };

  const currentDetails = selected ? getDetails(selected) : null;

  return (
    <div className="sensors-page">
      <div className="sensors-main-content">
        <h1 className="sensors-title">Arduino Sensors</h1>
        <p className="sensors-subtitle">
          Explore and learn sensors
        </p>

        <div className="sensors-grid">
          {sensorsData.map((s) => (
            <div 
              className="sensors-card" 
              key={s.id}
              onClick={() => setSelected(s)}
            >
              <div className="sensors-img-box">
                <img src={s.img} alt={s.name} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {selected && currentDetails && (
        <div className="sensors-modal-backdrop" onClick={() => setSelected(null)}>
          <div className="sensors-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="sensors-modal-close" onClick={() => setSelected(null)}>✕</button>

            <div className="sensors-modal-left">
              <div className="sensors-modal-img-box">
                <img src={selected.img} alt={selected.name} />
                <h2>{selected.name}</h2>
              </div>

              <div className="sensors-specs-box">
                <div className="sensors-specs-title">Specifications</div>
                {currentDetails.specs?.map((spec, idx) => (
                  <div key={idx} className="sensors-spec-item">
                    <span className="spec-label">{spec.label}:</span>
                    <span className="spec-val">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="sensors-modal-right">
              <div className="sensors-sec">
                <h3>About</h3>
                <p>{currentDetails.about}</p>
              </div>

              <div className="sensors-sec">
                <h3>Connection</h3>
                <p>{currentDetails.wiring}</p>
              </div>

              <div className="sensors-sec">
                <h3>Code Example</h3>
                <pre className="sensors-code-block">
                  <code>{currentDetails.code}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Футер */}
      <Footer />
    </div>
  );
}

export default SensorsPage;