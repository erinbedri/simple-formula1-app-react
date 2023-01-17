import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Drivers from "./components/Drivers";
import Circuits from "./components/Circuits";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/circuits" element={<Circuits />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
