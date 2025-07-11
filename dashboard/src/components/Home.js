import React from "react";

import { useParams } from "react-router-dom";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const { userId } = useParams(); 

  return (
    <>
      <TopBar />
      <Dashboard userId={userId} /> 
    </>
  );
};

export default Home;
