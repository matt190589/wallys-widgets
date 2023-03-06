import "../App.css";
import { useState } from "react";
import TrackOrder from "./TrackOrder";
import { Link } from "react-router-dom";

export default function Home() {
  const [trackButton, setTrackButton] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setTrackButton(true);
  };

  return (
    <div>
      <h3>
        Welcome to Wally's Widget. Please choose Track Order to check on an
        existing order or choose place order to order widgets.
      </h3>
      <button className="card-button">
        <Link to="/track-order">Track Order</Link>
      </button>
      <button className="card-button">
        <Link to="/order-form">Place Order</Link>
      </button>
    </div>
  );
}
