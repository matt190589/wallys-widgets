import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import OrderForm from "./components/OrderForm";
import Home from "./components/Home";
import TrackOrder from "./components/TrackOrder";

function App() {
  return (
    <Router>
      <div className="card">
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-form" element={<OrderForm />} />
          <Route path="/track-order" element={<TrackOrder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
