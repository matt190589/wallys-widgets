import "../App.css";
import { Link } from "react-router-dom";

export default function OrderCard(props) {
  return (
    <div className="order-card">
      <h2>Your order</h2>
      <p> Widget Packs: {props.finalWidgetPacks} </p>
      <p> Tracking number: {props.trackingNumber} </p>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button onClick={() => window.location.reload()}>
        <Link to="/order-form">Order More</Link>
      </button>
    </div>
  );
}
