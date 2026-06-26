import "./SensorsPage.css";

const sensorsData = [
  { id: 1, name: "KY-001", desc: "Temperature", img: "img/KY-001.jpg" },
  { id: 2, name: "KY-002", desc: "Vibration", img: "img/KY-002.jpg" },
  { id: 3, name: "KY-004", desc: "Button", img: "img/KY-004.jpg" },
  { id: 4, name: "KY-005", desc: "Infrared IR Transmitter", img: "img/KY-005.jpg" },
  { id: 5, name: "KY-006", desc: "Buzzer", img: "img/KY-006.jpg" },
  { id: 6, name: "KY-008", desc: "Laser", img: "img/KY-008.jpg" },
  { id: 7, name: "KY-009", desc: "RGB LED", img: "img/KY-009.jpg" },
  { id: 8, name: "KY-010", desc: "Light Blocking Sensor", img: "img/KY-010.jpg" },
  { id: 9, name: "KY-011", desc: "2-color LED", img: "img/KY-011.jpg" },
  { id: 10, name: "KY-012", desc: "Active Buzzer", img: "img/KY-012.jpg" },
  { id: 11, name: "KY-013", desc: "Analog Temperature Sensor", img: "img/KY-013.jpg" },
  { id: 12, name: "KY-015", desc: "Temperature + Humidity (DHT11)", img: "img/KY-015.jpg" },
  { id: 13, name: "KY-016", desc: "RGB LED Module", img: "img/KY-016.jpg" },
  { id: 14, name: "KY-017", desc: "Tilt Switch", img: "img/KY-017.jpg" },
  { id: 15, name: "KY-018", desc: "Photoresistor (Light Sensor)", img: "img/KY-018.jpg" },
  { id: 16, name: "KY-019", desc: "Relay Module", img: "img/KY-019.jpg" },
  { id: 17, name: "KY-020", desc: "Ball Switch", img: "img/KY-020.jpg" },
  { id: 18, name: "KY-021", desc: "Mini Reed Switch", img: "img/KY-021.jpg" },
  { id: 19, name: "KY-022", desc: "IR Receiver", img: "img/KY-022.jpg" },
  { id: 23, name: "KY-026", desc: "Flame Sensor", img: "img/KY-026.jpg" },
  { id: 24, name: "KY-027", desc: "Magic Light Cup", img: "img/KY-027.jpg" },
  { id: 25, name: "KY-028", desc: "Digital Temperature Sensor", img: "img/KY-028.jpg" },
  { id: 26, name: "KY-029", desc: "2-color LED Module", img: "img/KY-029.jpg" },
  { id: 27, name: "KY-031", desc: "Knock Sensor", img: "img/KY-031.jpg" },
  { id: 28, name: "KY-032", desc: "Obstacle Avoidance Sensor", img: "img/KY-032.jpg" },
  { id: 29, name: "KY-033", desc: "Line Tracking Sensor", img: "img/KY-033.jpg" },
  { id: 30, name: "KY-034", desc: "7-color Flash LED", img: "img/KY-034.jpg" },
  { id: 31, name: "KY-035", desc: "Hall Magnetic Sensor", img: "img/KY-035.jpg" },
  { id: 32, name: "KY-036", desc: "Touch Sensor", img: "img/KY-036.jpg" },
  { id: 33, name: "KY-037", desc: "Microphone Sound Sensor", img: "img/KY-037.jpg" },
  { id: 34, name: "KY-038", desc: "Sound Detection Sensor", img: "img/KY-038.jpg" },
  { id: 35, name: "HC-SR04", desc: "Ultrasonic Distance Sensor", img: "img/HC-SR04.jpg" }
];

function SensorsPage() {
  return (
    <div className="sensors-page">

      <h1 className="sensors-title">Arduino Sensors</h1>
      <p className="sensors-subtitle">Explore and learn sensors</p>

      <div className="sensors-grid">
        {sensorsData.map((s) => (
          <div className="sensors-card" key={s.id}>
            <div className="sensors-img-box">
              <img src={s.img} alt={s.name} />
            </div>

            <h3>{s.name}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default SensorsPage;