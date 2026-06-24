import "./BoardPage.css";


function Board () {

  const boardsData = [
    {
      name: "Arduino Uno",
      desc: "Most popular board for beginners",
      img: "/img/Arduino uno2.jpg"
    },
    {
      name: "Arduino Nano",
      desc: "Compact version of Uno",
      img: "/img/Arduino nano2.jpg"
    },
    {
      name: "Arduino Mega",
      desc: "Many pins for large projects",
      img: "/img/Arduino mega.jpg"
    },
    {
      name: "ESP32",
      desc: "WiFi + Bluetooth powerful board",
      img: "/img/esp32.jpg"
    }
  ];

  return (
    <div className="boards-page">

      <h1 className="boards-title">Arduino Boards</h1>
      <p className="boards-subtitle">Choose your board and start learning</p>

      <div className="boards-grid">

        {boardsData.map((b, i) => (
          <div className="boards-card" key={i}>
            <div className="boards-img-box">
              <img src={b.img} alt={b.name} />
            </div>

            <h3>{b.name}</h3>
            <p>{b.desc}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Board;