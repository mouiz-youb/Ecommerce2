import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
function App() {
  return (
    <div className="flex justify-center items-center flex-col gap-3">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
