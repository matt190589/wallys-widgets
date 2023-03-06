import "../App.css";
import { useState } from "react";
import TrackOrder from "./TrackOrder";

export default function Home() {
  const [trackButton, setTrackButton] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setTrackButton(true);
  };

  return (
    <div>
      <button>Track Order</button>
      <button>Place Order</button>
    </div>
  );
}
