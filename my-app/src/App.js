import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/HomeScreen/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

function App() {
  return (
    <Router>
       
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route  path="/Login" element={<Login/>} />
              <Route  path="/Register" element={<Register/>} />

              
            </Routes>
          
    </Router>
  );
}

export default App;
