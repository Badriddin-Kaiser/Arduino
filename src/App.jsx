import { useState } from "react";

function App() {
  const [coins, setCoins] = useState(0);
  const [tapPower, setTapPower] = useState(1);
  const [plusOne, setPlusOne] = useState(0);
  const [noPos, setNoPos] = useState({ top: 80, left: 200 });
  const [yesPos, setYesPos] = useState({ top: 80, left: 260 });
  const [showYes, setShowYes] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
// пароль через клавишу enter
const handleLogin = () => {
  if (password === "777") {
    setLoggedIn(true);
  } else {
    alert("Wrong password");
  }
};
  const [loggenIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");

  const moveNo = (e) => {
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 120);

  setNoPos({ top: y, left: x });
};
const handleMouseMove = (e) => {
  const dx = e.clientX - noPos.left;
  const dy = e.clientY - noPos.top;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // if mouse is close → run away
  if (distance < 120) {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    setNoPos({ top: y, left: x });
  }
};

  const Clicker = () => {
  const value = tapPower * 0.01;

  setCoins(prev => prev + value);

  setPlusOne(value); // чтобы popup знал сколько прибавилось

  setTimeout(() => setPlusOne(false), 300);
};

  const buyUpgrade = () => {
    const cost = 0.10;
    if (coins >= cost) {
      setCoins(prev => prev - cost);
      setTapPower(prev => prev + 1);
    }
  };
  const handleYesMove = (e) => {
  const dx = e.clientX - yesPos.left;
  const dy = e.clientY - yesPos.top;
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    setIsRunning(true); // ВКЛЮЧАЕМ режим побега

    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 120);

    setYesPos({ top: y, left: x });
  }
};
  const dollars = (coins / 100).toFixed(2);
  
  const ads = [
  {
    title: "Bitcoin Breaks New Resistance Level",
    text:
      "Bitcoin surged past key resistance levels as bullish momentum continues across global markets..."
  },
  {
    title: "Bitcoin Price Surge Toward $80,000",
    text:
      "Bitcoin experienced a significant price increase on May 2, 2026, reaching approximately $78,324..."
  },
  {
    title: "Record Institutional Inflows via ETF",
    text:
      "U.S. spot Bitcoin ETFs recorded $2.44B inflows in April 2026..."
  },
  {
    title: "Evolving Global Regulatory Frameworks",
    text:
      "SEC and UK are updating crypto frameworks..."
  },
  {
    title: "Bitcoin Halving Impact Still Driving Market",
    text:
      "Analysts say reduced mining rewards continue to support long-term bullish sentiment..."
  },
  {
    title: "Whales Accumulate More BTC",
    text:
      "Large Bitcoin holders are increasing accumulation despite short-term volatility..."
  },
  {
    title: "Exchange Reserves Hit Multi-Year Low",
    text:
      "Bitcoin reserves on exchanges continue to decline, signaling reduced selling pressure..."
  },
  {
    title: "Lightning Network Adoption Grows",
    text:
      "Bitcoin Lightning Network usage increases as faster and cheaper payments gain popularity..."
  },
  {
    title: "Bitcoin Volatility Drops Slightly",
    text:
      "Market data shows reduced volatility compared to previous months, indicating stabilization..."
  },
  {
    title: "Experts Predict Long-Term Bull Cycle",
    text:
      "Several analysts expect Bitcoin to continue upward trends into the next macro cycle..."
  }
];
if (!loggenIn) {
  return (
    <div
    style={{
    position: "fixed",
    inset: 0,
    background: "#0f172a",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }}
>
  <div
    style={{
      background: "#111827",
      padding: "30px",
      borderRadius: "12px",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "280px",
      border: "1px solid rgba(34,197,94,0.4)",
      boxShadow:"0 0 25px rgba(34,197,94,0.4)"

    }}
  >
    <h2 style={{ 
  color: "#22c55e",
  textAlign: "center"
}}>
  Login
</h2>
    <input
      type="Password"
      placeholder=" Enter your password"
       value={password}
  onChange={(e) => setPassword(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      if (password === "777") {
        setLoggedIn(true);
      } else {
        alert("Wrong password");
      }
    }
  }}
/>

    <button
      onClick={() => {
        if (password === "777") {
          setLoggedIn(true);
        } else {
          alert("Wrong password");
        }
      }}
      style={{
        padding: "10px",
        background: "#22c55e",
        border: "none",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer"
      }}
    >
      Enter
    </button>
  </div>
</div>
  );
}

  return (
    <div
      style={{
        height: "100vh",
        fontFamily: "Arial",
        background: "#0f172a",
        color: "white",
        display: "flex",
        paddingTop: "60px"
      }}
    >
      {/* TOP BANNER */}
<div
  style={{
    position: "fixed",
    left: "0px",
    top: "100px",
    width: "220px",
    padding: "15px",
    background: "#111827",
    borderRadius: "12px",
    border: "1px solid rgba(34, 50, 197, 0.29)",
    boxShadow: "0 0 20px rgba(34, 50, 197, 0.29)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000
  }}
>
  <span style={{ 
    color: "#c5ba22", 
    fontWeight: "bold", 
    width: "100%",
    textAlign: "center",
    userSelect: "none"
    }}>         
    Хочешь 1,000,000,000 Taps?
  </span>
 {/* BOX FOR BUTTONS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      alignItems: "center"
    }}
  >
    {/* DA */}
    <button
  onClick={() => alert("  Нажмите еще раз для подтверждения")}
  onMouseEnter={handleYesMove}
  onFocus={handleYesMove}
  tabIndex={-1}
  onMouseDown={(e) => e.preventDefault()}
  style={{
    position: isRunning ? "fixed" : "static",
    top: isRunning ? yesPos.top : undefined,
    left: isRunning ? yesPos.left : undefined,
    padding: "6px 14px",
    background: "green",
    border: "none", 
    borderRadius: "8px",
    color: "white",
    cursor: "pointer",
    userSelect: "none",
    
    zIndex: 9999
  }}
>
  ДА
</button>

    {/* NET */}
    <button
      onClick={() => alert("Очень жаль")}
      style={{
        padding: "6px 10px",
        background: "red",
        border: "none",
        borderRadius: "8px",
        color: "white",
        cursor: "pointer",
        userSelect: "none"
      }}
    >
      НЕТ
    </button>
  </div>
</div>

      
  {/* MAIN */}
<div
  onMouseMove={(e) => {
    handleMouseMove(e);
    handleYesMove(e);
  }}
  style={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}
>
        {/* POPUP */}
        {plusOne && (
          <div
            style={{
              position: "fixed",
              top: "40%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#22c55e",
              fontSize: "28px",
              fontWeight: "bold",
              pointerEvents: "none",
              userSelect: "none"
            }}
          >
            +${plusOne.toFixed(2)}
          </div>
        )}
        {/* SCORE */}
        <h1 style={{ color: "#22c55e",userSelect: "none" }}>
          ${coins.toFixed(2)}
        </h1>

        <p style={{ opacity: 0.7, userSelect: "none"}}>
  +${(tapPower * 0.01).toFixed(2)} per tap
</p>

        <img
        draggable={false}
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt="coin"
          style={{ width: "140px", 
            cursor: "pointer", 
            margin: "20px",
            userSelect: "none"
          }}
        />

        <button
          onClick={Clicker}
          style={{
            padding: "20px 50px",
            fontSize: "22px",
            background: "#22c55e",
            border: "none",
            borderRadius: "15px",
            color: "white",
            cursor: "pointer",
            userSelect: "none"
          }}
          onMouseDown={(e) => e.target.style.transform = "scale(0.9)"}
           onMouseUp={(e) => e.target.style.transform = "scale(1)"}
        >
          TAP
        </button>

        <button
          onClick={buyUpgrade}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            background: "#3b82f6",
            border: "none",
            borderRadius: "10px",
            color: "white",
            cursor: "pointer",
            userSelect: "none"
          }}
          onMouseDown={(e) => e.target.style.transform = "scale(0.9)"}
           onMouseUp={(e) => e.target.style.transform = "scale(1)"}
        >
          Buy +1 Tap ($0.10)
        </button>
      </div>

      {/* SIDEBAR */}
      <div
        style={{
          width: "240px",
          background: "#1e293b",
          padding: "15px",
          overflowY: "auto"
        }}
      >
        <h3 style={{ textAlign: "center", color: "#22c55e" }}>
          Ads
        </h3>

        {ads.map((item, i) => (
          <div
            key={i}
            style={{
              background: "#111827",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "10px"
            }}
          >
            <h4 style={{ fontSize: "13px", color: "#22c55e" }}>
              {item.title}
            </h4>
            <p style={{ fontSize: "12px", opacity: 0.8 }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;