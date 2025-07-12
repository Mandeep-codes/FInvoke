import React, { useState, useEffect, useRef, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./css/BuyAction.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const windowRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const { closeBuyWindow, userId } = useContext(GeneralContext); 

  const handleBuyClick = async () => {
    console.log("🧾 Buying as:", userId);
    const totalAmount = stockQuantity * stockPrice;

    try {
      // 1. Deduct funds
      const fundsRes = await axios.post(`https://finvoke.onrender.com/api/funds/buy`, {
        userId,
        amount: totalAmount,
      });

      // 2. Place order
      const orderRes = await axios.post(
        `https://finvoke.onrender.com/api/orders`,
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          withCredentials: true,
        }
      );

      console.log("✅ Funds updated:", orderRes.data);
      closeBuyWindow();
    } catch (err) {
      console.error(
        "❌ Error placing order or updating funds:",
        err.response?.data || err.message
      );
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  // Drag functionality
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    };

    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offset]);

  const handleMouseDown = (e) => {
    if (e.target.closest("input, button, a")) return;
    const rect = windowRef.current.getBoundingClientRect();
    setOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsDragging(true);
  };

  return (
    <div
      ref={windowRef}
      className="buy-window-container"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: isDragging ? "grabbing" : "default",
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="window-header">Buy {uid}</div>

      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(Number(e.target.value))}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
        <div>
          <button className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;



