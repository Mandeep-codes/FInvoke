import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/auth/me`, {
          withCredentials: true,
        });
        setUser(res.data.user);
      } catch (err) {
        console.error("User not authenticated", err);
        window.location.href = "https://finvoke-1.onrender.com"; 
      }
    };

    fetchUser();
  }, []);

  if (!user) return <div className="p-4">Loading your dashboard...</div>;

  return (
    <div className="dashboard-container">
      <GeneralContextProvider userId={user._id}>
        <WatchList />
      </GeneralContextProvider>

      <div className="content px-4 py-2">
        <h1 className="text-xl font-semibold mb-4">
          Welcome, {user.username}
        </h1>
        <p className="mb-4 text-gray-500">Email: {user.email}</p>

        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds userId={user._id} />} />

          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;


