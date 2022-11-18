import { Routes, Route } from "react-router-dom";
import "@stripe/stripe-js";

import Checkout from "./components/Checkout";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import "./styles.css";
import Home from "./components/Home";
import RazorPayUi from './components/RazorPayUi'
import AppBar from './components/AppBar';
import ProtectedRoute from "./Protected/ProtectedRoute";

export default function App() {
  return (
    <div className="App">
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/stripe" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/stripe/cancel" element={<Cancel />} />
          <Route path="/razor-pay" element={<RazorPayUi />} />
        </Route>
        <Route path="*" element={<h3>Page not found</h3>} />
      </Routes>
    </div>
  );
}
