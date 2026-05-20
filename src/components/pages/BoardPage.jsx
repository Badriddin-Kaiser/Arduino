import "./BoardPage.css";


function Board () {

  const boardsData = [
    {
      name: "Arduino Uno",
      desc: "Самая популярная плата для начинающих",
      img: "/img/Arduino uno2.jpg"
    },
    {
      name: "Arduino Nano",
      desc: "Компактная версия Uno",
      img: "/img/Arduino nano2.jpg"
    },
    {
      name: "Arduino Mega",
      desc: "Много пинов для больших проектов",
      img: "/img/Arduino mega.jpg"
    },
    {
      name: "ESP32",
      desc: "WiFi + Bluetooth мощная плата",
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