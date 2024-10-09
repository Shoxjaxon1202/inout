import React from "react";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout/Layout";

import "./App.css";

const App = () => {
  return (
    <div className="layout">
      <ToastContainer />
      <Layout />
    </div>
  );
};

export default App;
