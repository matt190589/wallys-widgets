import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h3>
        Welcome to Wally's Widgets.
        <br /> Please choose Track Order to check on an existing order or choose
        Place Order to order widgets.
      </h3>
      <button className="card-button">
        <Link to="/track-order">Track Order</Link>
      </button>
      <button className="card-button" style={{ marginTop: 0 }}>
        <Link to="/order-form">Place Order</Link>
      </button>
    </div>
  );
}
