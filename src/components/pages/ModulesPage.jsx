import "./ModulesPage.css";

const modulesData = [
  {
    id: 1,
    name: "Servo Motor",
    desc: "Controls angular position",
    img: "/img/servo-motor.jpg"
  },
  {
    id: 2,
    name: "LCD 16x2",
    desc: "Text display module",
    img: "/img/lcd-16x2.jpg"
  },
  {
    id: 3,
    name: "OLED 0.96\"",
    desc: "Small graphic display",
    img: "/img/oled.jpg"
  },
  {
    id: 4,
    name: "HC-05",
    desc: "Bluetooth Module",
    img: "/img/hc-05.jpg"
  },
  {
    id: 5,
    name: "ESP8266",
    desc: "WiFi Module",
    img: "/img/esp8266.jpg"
  },
  {
    id: 6,
    name: "Stepper Motor",
    desc: "Precise rotation control",
    img: "/img/stepper-motor.jpg"
  },
  {
    id: 7,
    name: "L298N",
    desc: "Motor Driver Module",
    img: "/img/l298n.jpg"
  },
  {
    id: 8,
    name: "MPU-6050",
    desc: "Gyroscope + Accelerometer",
    img: "/img/mpu6050.jpg"
  },
  {
    id: 9,
    name: "NRF24L01",
    desc: "Wireless RF Module",
    img: "/img/nrf24l01.jpg"
  },
  {
    id: 10,
    name: "DS3231",
    desc: "Real Time Clock Module",
    img: "/img/ds3231.jpg"
  },
  {
    id: 11,
    name: "SD Card",
    desc: "SD Card Reader Module",
    img: "/img/sd-card.jpg"
  },
  {
    id: 12,
    name: "Keypad 4x4",
    desc: "16 Button Keypad",
    img: "/img/keypad.jpg"
  }
];

function ModulesPage() {
  return (
    <div className="modules-page">

      <h1 className="modules-title">Arduino Modules</h1>
      <p className="modules-subtitle">Explore and learn modules</p>

      <div className="modules-grid">
        {modulesData.map((m) => (
          <div className="modules-card" key={m.id}>
            <div className="modules-img-box">
              <img src={m.img} alt={m.name} />
            </div>

            <h3>{m.name}</h3>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default ModulesPage;