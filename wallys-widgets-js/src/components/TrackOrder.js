import WidgetCalculator from "./WidgetCalculator";
import { useState } from "react";
import "../App.css";
import { supabase } from "../supabaseClient";
import { Link } from "react-router-dom";

export default function TrackOrder() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [orderButtonStatus, setOrderButtonStatus] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const userInput = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    setTrackingNumber(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setOrderButtonStatus(true);
    const { data, error } = await supabase
      .from("widget-orders")
      .select("*")
      .eq("tracking_number", trackingNumber);
    if (error) {
      console.log(error);
    } else {
      setOrderData(data[0]);
    }
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
      {orderData ? (
        <>
          <h1>You order is:</h1>
          <WidgetCalculator
            trackingNumber={trackingNumber}
            handleClick={handleClick}
            newOrder={orderData}
          />
        </>
      ) : (
        <div className="order-card">
          <p>Sorry, tracking number not found.</p>
          <button>
            <Link to="/">Home</Link>
          </button>
        </div>
      )}
    </div>
  );
}
