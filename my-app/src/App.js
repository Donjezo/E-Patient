import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="outer">
          <div className="inner">
            <Routes>
              <Route exact path="/" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
