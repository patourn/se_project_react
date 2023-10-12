const weatherOptions = [
  { url: "images/day/cloudy.png", day: true, type: "cloudy" },
  { url: "images/day/fog.png", day: true, type: "fog" },
  { url: "images/day/rain.png", day: true, type: "rain" },
  { url: "images/day/snow.png", day: true, type: "snow" },
  { url: "images/day/storm.png", day: true, type: "storm" },
  { url: "images/day/sunny.png", day: true, type: "sunny" },
  { url: "images/night/cloudy.png", day: false, type: "cloudy" },
  { url: "images/night/fog.png", day: false, type: "fog" },
  { url: "images/night/rain.png", day: false, type: "rain" },
  { url: "images/night/snow.png", day: false, type: "snow" },
  { url: "images/night/storm.png", day: false, type: "storm" },
  { url: "images/night/sunny.png", day: false, type: "sunny" },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc[0].url);

  return (
    <section className="weather" id="weather">
      <div className="weather_info">106F</div>
      <img
        src="images/Day/Sunny.png"
        className="weather_image"
        alt="A breathtaking landskape of the Iceland"
      />
    </section>
  );
};

export default WeatherCard;
