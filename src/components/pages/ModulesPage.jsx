import { useState } from "react";
import "./ModulesPage.css";
// ПРАВИЛЬНО:
import Footer from "../resourse/FooterPage.jsx";

const modulesData = [
  {
    id: 1,
    name: "L298N",
    desc: "Dual H-Bridge Motor Driver",
    img: "img/l298n.jpg",
    details: {
      about:
        "The L298N is a high-power dual-channel motor driver designed for controlling DC and stepper motors.",
      specs: [
        { label: "Chip", val: "L298N" },
        { label: "Motor Voltage", val: "5V - 35V" },
        { label: "Peak Current", val: "2A per channel" },
        { label: "Logic Voltage", val: "5V" },
      ],
      wiring:
        "OUT1 and OUT2 connect to Motor A. IN1 and IN2 connect to Arduino digital pins.",
      code: "void setup() {\n  pinMode(3, OUTPUT);\n  pinMode(4, OUTPUT);\n}\n\nvoid loop() {\n  digitalWrite(3, HIGH);\n  digitalWrite(4, LOW);\n}",
    },
  },
  {
    id: 2,
    name: "ESP8266 ESP-01",
    desc: "Wi-Fi Module",
    img: "img/esp8266.jpg",
    details: {
      about:
        "The ESP8266 ESP-01 is a compact Wi-Fi module that enables Arduino and other microcontrollers to connect to the Internet.",
      specs: [
        { label: "Chip", val: "ESP8266" },
        { label: "Wi-Fi Standard", val: "802.11 b/g/n" },
        { label: "Operating Voltage", val: "3.3V" },
        { label: "Flash Memory", val: "up to 1 MB" },
      ],
      wiring:
        "VCC connects to 3.3V, GND to GND. TX and RX connect to serial communication pins.",
      code: 'void setup() {\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  Serial.println("Hello from ESP8266!");\n  delay(1000);\n}',
    },
  },
  {
    id: 3,
    name: "NRF24L01",
    desc: "2.4GHz RF Transceiver",
    img: "img/nrf24l01.jpg",
    details: {
      about:
        "The NRF24L01 is a wireless radio transceiver module designed for data communication between Arduinos at 2.4 GHz.",
      specs: [
        { label: "Frequency", val: "2.4 GHz" },
        { label: "Interface", val: "SPI" },
        { label: "Operating Voltage", val: "3.3V" },
        { label: "Range", val: "up to 100 m" },
      ],
      wiring:
        "VCC connects to 3.3V, GND to GND. CE, CSN, SCK, MOSI, and MISO connect to Arduino SPI pins.",
      code: "#include <SPI.h>\n#include <nRF24L01.h>\n#include <RF24.h>\n\nRF24 radio(9, 10);\n\nvoid setup() {\n  radio.begin();\n}\n\nvoid loop() {\n}",
    },
  },
  {
    id: 4,
    name: "LCD 16x2",
    desc: "16x2 Character Display",
    img: "img/lcd-16x2.jpg",
    details: {
      about:
        "The LCD 16x2 is a popular display capable of rendering 16 characters across two lines.",
      specs: [
        { label: "Type", val: "LCD 16x2" },
        { label: "Lines", val: "2" },
        { label: "Characters", val: "16 per line" },
        { label: "Operating Voltage", val: "5V" },
      ],
      wiring:
        "VCC connects to 5V, GND to GND. RS, E, and data lines connect to Arduino digital pins.",
      code: '#include <LiquidCrystal.h>\n\nLiquidCrystal lcd(12, 11, 5, 4, 3, 2);\n\nvoid setup() {\n  lcd.begin(16, 2);\n  lcd.print("Hello Arduino!");\n}\n\nvoid loop() {\n}',
    },
  },
  {
    id: 5,
    name: "MPU6050",
    desc: "Gyroscope & Accelerometer",
    img: "img/mpu6050.jpg",
    details: {
      about:
        "The MPU6050 is a motion tracking sensor containing a 3-axis accelerometer and 3-axis gyroscope.",
      specs: [
        { label: "Accelerometer", val: "3 Axis" },
        { label: "Gyroscope", val: "3 Axis" },
        { label: "Interface", val: "I2C" },
        { label: "Operating Voltage", val: "3.3V - 5V" },
      ],
      wiring:
        "VCC connects to power, GND to GND. SDA and SCL connect to Arduino I2C pins.",
      code: '#include <Wire.h>\n\nvoid setup() {\n  Wire.begin();\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  Serial.println("MPU6050");\n  delay(500);\n}',
    },
  },
  {
    id: 6,
    name: "OLED",
    desc: "OLED Display Module",
    img: "img/oled.jpg",
    details: {
      about:
        "OLED is a compact, high-contrast display module widely used in custom Arduino UI projects.",
      specs: [
        { label: "Type", val: "OLED" },
        { label: "Size", val: "0.96 inch" },
        { label: "Resolution", val: "128x64" },
        { label: "Interface", val: "I2C" },
      ],
      wiring:
        "VCC connects to power, GND to GND. SDA and SCL connect to Arduino I2C pins.",
      code: '#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n\nAdafruit_SSD1306 display(128, 64, &Wire);\n\nvoid setup() {\n  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n  display.clearDisplay();\n  display.setTextSize(1);\n  display.setTextColor(WHITE);\n  display.setCursor(0, 0);\n  display.println("Hello!");\n  display.display();\n}\n\nvoid loop() {\n}',
    },
  },
  {
    id: 7,
    name: "SD Card Module",
    desc: "Micro SD Card Reader",
    img: "img/sd-card.jpg",
    details: {
      about:
        "The SD Card Module allows Arduino to read and write data to a microSD memory card.",
      specs: [
        { label: "Card Type", val: "MicroSD" },
        { label: "Interface", val: "SPI" },
        { label: "Operating Voltage", val: "3.3V / 5V" },
        { label: "Storage", val: "Depends on Card" },
      ],
      wiring:
        "VCC connects to power, GND to GND. CS, MOSI, MISO, and SCK connect to Arduino SPI pins.",
      code: '#include <SPI.h>\n#include <SD.h>\n\nvoid setup() {\n  Serial.begin(9600);\n\n  if (SD.begin(10)) {\n    Serial.println("SD Card OK");\n  } else {\n    Serial.println("SD Card Error");\n  }\n}\n\nvoid loop() {\n}',
    },
  },
  {
    id: 8,
    name: "Servo Motor",
    desc: "Servo Motor Module",
    img: "img/servo-motor.jpg",
    details: {
      about:
        "A Servo Motor allows precise control of angular position, ideal for robotics and mechanical arms.",
      specs: [
        { label: "Type", val: "Servo Motor" },
        { label: "Angle Range", val: "0° - 180°" },
        { label: "Control", val: "PWM" },
        { label: "Operating Voltage", val: "5V" },
      ],
      wiring:
        "Red wire to 5V, Brown/Black wire to GND, Signal wire to an Arduino PWM pin.",
      code: "#include <Servo.h>\n\nServo myServo;\n\nvoid setup() {\n  myServo.attach(9);\n}\n\nvoid loop() {\n  myServo.write(0);\n  delay(1000);\n\n  myServo.write(90);\n  delay(1000);\n\n  myServo.write(180);\n  delay(1000);\n}",
    },
  },
  {
    id: 9,
    name: "Stepper Motor",
    desc: "Stepper Motor",
    img: "img/stepper-motor.jpg",
    details: {
      about:
        "A Stepper Motor divides a full rotation into equal steps for high-precision movement in 3D printers and CNCs.",
      specs: [
        { label: "Type", val: "Stepper Motor" },
        { label: "Control", val: "Step / Direction" },
        { label: "Precision", val: "High" },
        { label: "Application", val: "Robotics & CNC" },
      ],
      wiring:
        "Connect through a dedicated driver module. Connect STEP and DIR driver pins to Arduino.",
      code: "const int stepPin = 3;\nconst int dirPin = 4;\n\nvoid setup() {\n  pinMode(stepPin, OUTPUT);\n  pinMode(dirPin, OUTPUT);\n\n  digitalWrite(dirPin, HIGH);\n}\n\nvoid loop() {\n  digitalWrite(stepPin, HIGH);\n  delayMicroseconds(500);\n\n  digitalWrite(stepPin, LOW);\n  delayMicroseconds(500);\n}",
    },
  },
  {
    id: 10,
    name: "ESP8266 Board",
    desc: "Wi-Fi Development Board",
    img: "img/esp8266.jpg",
    details: {
      about:
        "The ESP8266 is a cost-effective Wi-Fi microchip with full TCP/IP stack and microcontroller capability, ideal for basic IoT projects.",
      specs: [
        { label: "Processor", val: "Single-Core 80MHz" },
        { label: "Wi-Fi", val: "802.11 b/g/n (2.4 GHz)" },
        { label: "Bluetooth", val: "None" },
        { label: "Operating Voltage", val: "3.3V" },
      ],
      wiring:
        "Connect via Micro-USB to PC. Connect sensors using GPIO, I2C, SPI, or single ADC pin.",
      code: 'void setup() {\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  Serial.println("Hello from ESP8266!");\n  delay(1000);\n}',
    },
  },
];

function ModulesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="modules-page">
      <div className="modules-main-content">
        <h1 className="modules-title">Arduino Modules</h1>
        <p className="modules-subtitle">
          Explore power, communication and driver modules
        </p>

        <div className="modules-grid">
          {modulesData.map((m) => (
            <div
              className="modules-card"
              key={m.id}
              onClick={() => setSelected(m)}
            >
              <div className="modules-img-box">
                <img src={m.img} alt={m.name} />
              </div>

              <h3>{m.name}</h3>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div
          className="modules-modal-backdrop"
          onClick={() => setSelected(null)}
        >
          <div
            className="modules-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modules-modal-close"
              onClick={() => setSelected(null)}
            >
              ✕
            </button>

            <div className="modules-modal-left">
              <div className="modules-modal-img-box">
                <img src={selected.img} alt={selected.name} />
                <h2>{selected.name}</h2>
              </div>

              <div className="modules-specs-box">
                <div className="modules-specs-title">Specifications</div>

                {selected.details?.specs?.map((spec, idx) => (
                  <div key={idx} className="modules-spec-item">
                    <span className="spec-label">{spec.label}:</span>
                    <span className="spec-val">{spec.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modules-modal-right">
              <div className="modules-sec">
                <h3>About</h3>
                <p>{selected.details?.about}</p>
              </div>

              <div className="modules-sec">
                <h3>Connection</h3>
                <p>{selected.details?.wiring}</p>
              </div>

              <div className="modules-sec">
                <h3>Code Example</h3>
                <pre className="modules-code-block">
                  <code>{selected.details?.code}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default ModulesPage;