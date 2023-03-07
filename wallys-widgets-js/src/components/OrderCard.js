import "../App.css";
import { Link } from "react-router-dom";

export default function OrderCard(props) {
  return (
    <div className="order-card">
      <h2>Your order</h2>
      <h4>
        Widget Packs: <span>{props.finalWidgetPacks}</span>{" "}
      </h4>
      <h4>Tracking number: {props.trackingNumber}</h4>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button onClick={() => window.location.reload()}>
        <Link to="/order-form">Order More</Link>
      </button>
    </div>
  );
}
