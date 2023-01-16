import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Drivers from "./components/Drivers";
import Circuits from "./components/Circuits";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/circuits" element={<Circuits />} />
      </Routes>
    </>
  );
}

export default App;
