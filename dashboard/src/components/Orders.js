import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './css/Orders.css'

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
  axios
    .get("http://localhost:5000/api/orders", {
      withCredentials: true,
    })
    .then((res) => {
      setAllOrders(res.data.orders);
    })
    .catch((err) => {
      console.error("Failed to fetch orders:", err);
    });
}, []);


  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Instrument</th>
                  <th>Qty</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => {
                  const isBuy = order.mode === "BUY";
                  return (
                    <tr key={index}>
                      <td className={isBuy ? "buy" : "sell"}>{order.mode}</td>
                      <td>{order.name}</td>
                      <td>{order.qty}</td>
                      <td>{order.price.toFixed(2)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

