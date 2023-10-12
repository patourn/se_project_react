// import logo from "./Logo.png";
import "./App.css";
// import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";
import WeatherCard from "../WeatherCard/WeatherCard";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="cloudy" />
        <section id="card-section">card Section</section>
      </main>
    </div>
  );
}

export default App;
