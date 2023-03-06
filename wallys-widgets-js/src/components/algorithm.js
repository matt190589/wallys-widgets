import OrderDisplay from "./OrderDisplay";
import { useState } from "react";

export default function Algorithm() {
  const [userOrder, setUserOrder] = useState();
  const userInput = (event) => {
    const value = event.target.value.toLowerCase().trim();
    setUserOrder(value);
    console.log("order", userOrder);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // setUserOrder("");
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
        ></input>
        <button>Order</button>
        <OrderDisplay userOrder={userOrder} />
      </form>
    </div>
  );
}
