import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Fund.css";
import axios from "axios";

const Funds = ({ userId }) => {
  const [funds, setFunds] = useState({
    availableMargin: 0,
    usedMargin: 0,
    availableCash: 0,
    openingBalance: 0,
  });

  const fetchFunds = async () => {
    try {
      const res = await axios.get(`https://finvoke.onrender.com/api/funds/${userId}`);
      setFunds(res.data);
    } catch (err) {
      console.error("Error fetching funds:", err);
    }
  };

  const handleAddFunds = async () => {
    const amount = prompt("Enter amount to add:");
    if (!amount || isNaN(amount)) return;

    try {
      const res = await axios.post(`https://finvoke.onrender.com/api/funds/add`, {
        userId,
        amount: parseFloat(amount),
      });
      setFunds(res.data);
    } catch (err) {
      console.error("Failed to add funds:", err);
    }
  };

  useEffect(() => {
    if (userId) {fetchFunds()};
  }, [userId]);

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>
        <button className="btn btn-green" onClick={handleAddFunds}>
          Add funds
        </button>
        <Link className="btn btn-blue">Withdraw</Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">{funds.availableMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">{funds.usedMargin.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">{funds.availableCash.toFixed(2)}</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>{funds.openingBalance.toFixed(2)}</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;

