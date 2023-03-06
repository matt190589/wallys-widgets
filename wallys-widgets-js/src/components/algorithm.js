import OrderDisplay from "./OrderDisplay";
import { useState } from "react";

export default function Algorithm() {
  const [userOrder, setUserOrder] = useState("");
  const userInput = (e) => {
    const value = e.target.value.trim();
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
      <h1>Wallys Widgets</h1>
      <form onSubmit={handleClick}>
        <input
          className="input-box"
          placeholder="Type widgets"
          type="text"
          onChange={userInput}
          value={userOrder}
        ></input>
        <button>Order</button>
        <OrderDisplay userOrder={userOrder} />
      </form>
    </div>
  );
}
