import { useState } from "react";

function App() {
  const [coins, setCoins] = useState(0);
  const [plusOne, setPlusOne] = useState(false);
  const [tapPower, setTapPower] = useState(1);
  const [shopOpen, setShopOpen] = useState(false);

  const Clicker = () => {
    setCoins(prev => prev + tapPower);

    setPlusOne(true);
    setTimeout(() => {
      setPlusOne(false);
    }, 400);
  };

  const Clear = () => {
    setCoins(0);
  };

  const buyUpgrade = () => {
    const cost = 10;

    if (coins >= cost) {
      setCoins(prev => prev - cost);
      setTapPower(prev => prev + 1);
    }
  };

  const dollars = coins * 0.01;

  return (
    <div style={{
      height: "100vh",
      fontFamily: "Arial",
      background: "radial-gradient(circle at top, #1e293b, #0f172a)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>

      {/* HEADER */}
      <div style={{
        position: "fixed",
        top: 0,
        width: "100%",
        textAlign: "center",
        padding: "15px",
        fontSize: "18px",
        fontWeight: "bold",
        background: "rgba(31,41,55,0.9)",
        color: "#00ffcc",
        boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
      }}>
        Tap to collect your crypto-money 
      </div>

      {/* +$ POPUP */}
      {plusOne && (
        <div style={{
          position: "fixed",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "28px",
          fontWeight: "bold",
          color: "#22c55e",
          pointerEvents: "none",
          userSelect: "none",
          animation: "pop 0.4s ease"
        }}>
          +${(tapPower * 0.01).toFixed(2)}
        </div>
      )}

      {/* CARD */}
      <div style={{
        background: "rgba(255,255,255,0.05)",
        padding: "50px",
        borderRadius: "25px",
        boxShadow: "0 0 40px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backdropFilter: "blur(10px)"
      }}>

        {/* COIN IMAGE */}
        <img
          src="https://cryptologos.cc/logos/bitcoin-btc-logo.png"
          alt="bitcoin"
          draggable="false"
          style={{
            width: "140px",
            userSelect: "none",
            marginBottom: "20px",
            cursor: "pointer"
          }}
          onClick={Clicker}
        />

        {/* SCORE */}
        <h2 style={{
          color: "#22c55e",
          userSelect: "none",
          pointerEvents: "none"
        }}>
          ${dollars.toFixed(2)}
        </h2>


        {/* TAP BUTTON */}
        <button
          onClick={Clicker}
          style={{
            marginTop: "20px",
            background: "#22c55e",
            padding: "25px 50px",
            fontSize: "24px",
            borderRadius: "20px",
            cursor: "pointer",
            border: "none",
            color: "white",
            userSelect: "none",
            transition: "0.2s"
          }}
          onMouseDown={(e) => e.target.style.transform = "scale(0.85)"}
          onMouseUp={(e) => e.target.style.transform = "scale(1)"}
        >
          TAP
        </button>

      </div>

      {/* SHOP BUTTON */}
      <button
        onClick={() => setShopOpen(!shopOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "10px 15px",
          background: "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer"
        }}
      >
        SHOP 
      </button>

      {/* SHOP BOX */}
      {shopOpen && (
        <div style={{
          position: "fixed",
          bottom: "80px",
          right: "20px",
          background: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          color: "white",
          width: "200px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)"
        }}>
          <h3> Upgrade Tap</h3>

          <p>Current: {tapPower}x</p>
          <p>Cost: $0.10</p>

          <button
            onClick={buyUpgrade}
            style={{
              marginTop: "10px",
              padding: "10px",
              width: "100%",
              background: "#22c55e",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              color: "white"
            }}
          >
            Buy +1 Tap
          </button>
        </div>
      )}

    </div>
  );
}

export default App;