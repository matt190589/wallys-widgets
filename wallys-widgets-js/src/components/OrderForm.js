import { useState } from "react";
import WidgetCalculator from "./WidgetCalculator";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../supabaseClient";

export default function OrderForm() {
  const [userOrder, setUserOrder] = useState("");
  const [newOrder, setNewOrder] = useState([]);
  const [orderButtonStatus, setOrderButtonStatus] = useState(false);
  const userInput = (e) => {
    const value = e.target.value.trim();
    console.log(value);
    setUserOrder(value);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (/^\d+$/.test(userOrder) && userOrder <= 1000000) {
      setOrderButtonStatus(true);
      const orderNum = "WW" + uuidv4().substring(0, 8);
      const newOrder = {
        tracking_number: orderNum,
        user_order: userOrder,
      };
      setNewOrder(newOrder);
      try {
        const { data, error } = await supabase
          .from("widget-orders")
          .insert([newOrder]);
        if (error) {
          console.log("Error inserting order", error);
        } else {
          console.log("Order inserted successfully", data);
        }
      } catch (error) {
        console.log("Error inserting order", error);
      }
    } else if (userOrder > 1000000) {
      alert(
        "That's a lot of widgets. We'll have to check before processing your order. The max order is 1,000,000 widgets."
      );
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
        <button className="card-button">Order widgets</button>
      </form>
    </div>
  ) : (
    <div>
      <h2>Thank you for your order.</h2>
      <WidgetCalculator
        newOrder={newOrder}
        orderButtonStatus={orderButtonStatus}
      />
    </div>
  );
}
