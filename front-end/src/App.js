import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import "./styles.css";
import Home from "./components/Home";
import RazorPayUi from './components/RazorPayUi'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stripe" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/stripe/cancel" element={<Cancel />} />
        <Route path="/razor-pay" element={<RazorPayUi />} />
      </Routes>
    </div>
  );
}
