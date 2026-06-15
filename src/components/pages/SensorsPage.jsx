import "./SensorsPage.css";

function SensorsPage() {

  const sensorsData = [
    {
      name: "KY-001",
      desc: "Temperature",
      img: "/img/ky--001.jpg"
    },
    {
      name: "KY-002",
      desc: "Vibration",
      img: "/img/KY-002.jpg"
    },
    {
      name: "KY-004",
      desc: "Button",
      img: "/img/KY-004.jpg"
    },
    {
      name: "KY-005",
      desc: "Infrared IR Transmitter",
      img: "/img/KY-005.jpg"
    },
    {
      name: "KY-006",
      desc: "Buzzer",
      img: "/img/KY-006.jpg"
    },
    {
      name: "KY-008",
      desc: "Lazer",
      img: "/img/KY-008.jpg"
    },
    {
      name: "KY-009",
      desc: "RGB LED",
      img: "/img/KY-009.jpg"
    },
    {
      name: "KY-010",
      desc: "Light Blocking Sensor",
      img: "/img/KY-010.jpg"
    },
    {
      name: "KY-011",
      desc: "2-color LED",
      img: "/img/KY-011.jpg"
    },
    {
      name: "KY-012",
      desc: "Active Buzzer",
      img: "/img/KY-012.jpg"
    },
    {
      name: "KY-013",
      desc: "Analog Temperature Sensor",
      img: "/img/KY-013.jpg"
    },
    {
      name: "KY-015",
      desc: "Temperature + Humidity (DHT11)",
      img: "/img/KY-015.jpg"
    },
    {
      name: "KY-016",
      desc: "RGB LED Module",
      img: "/img/KY-016.jpg"
    },
    {
      name: "KY-017",
      desc: "Tilt Switch",
      img: "/img/KY-017.jpg"
    },
    {
      name: "KY-018",
      desc: "Photoresistor (Light Sensor)",
      img: "/img/KY-018.jpg"
    },
    {
      name: "KY-019",
      desc: "Relay Module",
      img: "/img/KY-019.jpg"
    },
    {
      name: "KY-020",
      desc: "Ball Switch",
      img: "/img/KY-020.jpg"
    },
    {
      name: "KY-021",
      desc: "Mini Reed Switch",
      img: "/img/KY-021.jpg"
    },
    {
      name: "KY-022",
      desc: "IR Receiver",
      img: "/img/KY-022.jpg"
    },
    {
      name: "KY-023",
      desc: "Joystick Module",
      img: "/img/KY-023.jpg"
    },
    {
      name: "KY-024",
      desc: "Linear Hall Sensor",
      img: "/img/KY-024.jpg"
    },
    {
      name: "KY-025",
      desc: "Reed Switch Module",
      img: "/img/KY-025.jpg"
    },
    {
      name: "KY-026",
      desc: "Flame Sensor",
      img: "/img/KY-026.jpg"
    },
    {
      name: "KY-027",
      desc: "Magic Light Cup",
      img: "/img/KY-027.jpg"
    },
    {
      name: "KY-028",
      desc: "Digital Temperature Sensor",
      img: "/img/KY-028.jpg"
    },
    {
      name: "KY-029",
      desc: "2-color LED Module",
      img: "/img/KY-029.jpg"
    },
    {
      name: "KY-031",
      desc: "Knock Sensor",
      img: "/img/KY-031.jpg"
    },
    {
      name: "KY-032",
      desc: "Obstacle Avoidance Sensor",
      img: "/img/KY-032.jpg"
    },
    {
      name: "KY-033",
      desc: "Line Tracking Sensor",
      img: "/img/KY-033.jpg"
    },
    {
      name: "KY-034",
      desc: "7-color Flash LED",
      img: "/img/KY-034.jpg"
    },
    {
      name: "KY-035",
      desc: "Hall Magnetic Sensor",
      img: "/img/KY-035.jpg"
    },
    {
      name: "KY-036",
      desc: "Touch Sensor",
      img: "/img/KY-036.jpg"
    },
    {
      name: "KY-037",
      desc: "Microphone Sound Sensor",
      img: "/img/KY-037.jpg"
    },
    {
      name: "KY-038",
      desc: "Sound Detection Sensor",
      img: "/img/KY-038.jpg"
    },
    {
      name: "HC-SR04",
      desc: "Ultrasonic Distance Sensor",
      img: "/img/HC-SR04.jpg"
    },
  ];

  return (
    <div className="sensors-page">

      <h1 className="sensors-title">Arduino Sensors</h1>
      <p className="sensors-subtitle">Explore and learn sensors</p>

      <div className="sensors-grid">

        {sensorsData.map((s, i) => (
          <div className="sensors-card" key={i}>
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