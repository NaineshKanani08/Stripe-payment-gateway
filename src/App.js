import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="cancel" element={<Cancel />} />
      </Routes>
    </div>
  );
}
