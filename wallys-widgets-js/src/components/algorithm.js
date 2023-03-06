import OrderDisplay from "./OrderDisplay";
import { useState } from "react";
import "../App.css";

export default function Algorithm() {
  const [userOrder, setUserOrder] = useState("");
  const userInput = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    setUserOrder(value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (/^\d+$/.test(userOrder)) {
      setUserOrder("");
    } else {
      alert("Please enter a valid number.");
    }
  };
  return (
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
        <OrderDisplay userOrder={userOrder} />
      </form>
    </div>
  );
}
