import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import CaputerFace from "./Pages/CaputerFace";
import Home from "./Pages/Home";
function App() {
  const [color, setColor] = useState(2);
  const [name, setName] = useState('John Doe');
  return (
    <div>
      <Routes>
        <Route
          path="/caputreface"
          element={<CaputerFace color={color} setColor={setColor}/>}
        />
        <Route
          path="/login"
          element={<Login color={color} setColor={setColor} setName={setName} />}
        />
        <Route
          path="/register"
          element={<Register color={color} setColor={setColor} />}
        />
        <Route
          path="/"
          element={<Home name={name}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
