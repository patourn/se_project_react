// import logo
import "./App.css";

// import ItemModal from "../ItemModal/ItemModal";
import Header from "../Header/Header";
// import WeatherCard from "../WeatherCard/WeatherCard";
// import ItemCard from "../ItemCard/ItemCard";
import Main from "../Main/Main";
import Footer from "../footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

// import "./src/index.js";

function App() {
  const weatherTemp = "102°F";
  return (
    <div>
      <Header />
      <Main weatherTemp={weatherTemp} />
      <Footer />
      <ModalWithForm title="New Garment">These are the children</ModalWithForm>
    </div>
  );
}

export default App;
