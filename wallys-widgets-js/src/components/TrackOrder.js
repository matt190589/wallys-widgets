import OrderDisplay from "./WidgetCalculator";
import { useState } from "react";
import "../App.css";

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderButtonStatus, setOrderButtonStatus] = useState(false);
  const userInput = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    setTrackingNumber(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setOrderButtonStatus(true);
  };
  return orderButtonStatus === false ? (
    <div>
      <h3>
        Please enter your tracking number and click to find details on your
        previous order.
      </h3>
      <form onSubmit={handleClick}>
        <input
          className="card-input"
          placeholder="Type tracking number here"
          type="text"
          onChange={userInput}
          value={trackingNumber}
        ></input>
        <button className="card-button">Track Order</button>
      </form>
    </div>
  ) : (
    <div>
      <h1>You order is:</h1>
      <OrderDisplay trackingNumber={trackingNumber} handleClick={handleClick} />
    </div>
  );
}
