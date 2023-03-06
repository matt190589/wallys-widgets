import "./App.css";
import Algorithm from "./components/Algorithm";
import Logo from "./Images/wallys-logo.png";

function App() {
  return (
    <div className="card">
      <img src={Logo} alt="wallys logo" className="card-logo" />
      <h1 className="card-title">Wally's Widgets</h1>
      <Algorithm />
    </div>
  );
}

export default App;
