// import logo from "./Logo.png";
import "./App.css";
// import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <section className="weather" id="weather">
          <div className="weather_info">75F</div>

          <img src="images/Day/Sunny.png" className="weather_image" />
        </section>
        <section id="card-section">card Section</section>
      </main>
    </div>
  );
}

export default App;
