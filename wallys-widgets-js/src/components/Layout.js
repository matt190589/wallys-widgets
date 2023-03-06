import "../App.css";
import Logo from "../Images/wallys-logo.png";

export default function Layout() {
  return (
    <div>
      <img src={Logo} alt="wallys logo" className="card-logo" />
      <h1 className="card-title">Wally's Widgets</h1>
    </div>
  );
}
