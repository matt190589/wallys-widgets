import OrderDisplay from "./OrderDisplay";
import { useState } from "react";
import "../App.css";

export default function OrderForm() {
  const [userOrder, setUserOrder] = useState("");
  const [orderButtonStatus, setOrderButtonStatus] = useState(false);
  const userInput = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    setUserOrder(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (/^\d+$/.test(userOrder)) {
      setOrderButtonStatus(true);
    } else {
      alert("Please enter a valid number.");
    }
  };
  return orderButtonStatus === false ? (
    <div>
      <h3>
        Please enter the number of widgets you require in the box below and
        click the order button.
      </h3>
      <form onSubmit={handleClick}>
        <input
          className="card-input"
          placeholder="Type number here"
          type="text"
          onChange={userInput}
          value={userOrder}
        ></input>
        <button className="card-button">Order</button>
      </form>
    </div>
  ) : (
    <div>
      <h1>You order is:</h1>
      <OrderDisplay userOrder={userOrder} handleClick={handleClick} />
    </div>
  );
}
