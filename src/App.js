import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./components/home/Home";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
