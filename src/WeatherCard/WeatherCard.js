const weatherOptions = [
  {
    url: require("../images/day/cloudy.png").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/fog.png").default, day: true, type: "fog" },
  { url: require("../images/day/rain.png").default, day: true, type: "rain" },
  { url: require("../images/day/snow.png").default, day: true, type: "snow" },
  { url: require("../images/day/storm.png").default, day: true, type: "storm" },
  { url: require("../images/day/sunny.png").default, day: true, type: "sunny" },
  {
    url: require("../images/night/cloudy.png").default,
    day: false,
    type: "cloudy",
  },
  { url: require("../images/night/fog.png").default, day: false, type: "fog" },
  {
    url: require("../images/night/rain.png").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/snow.png").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/storm.png").default,
    day: false,
    type: "storm",
  },
  {
    url: require("../images/night/sunny.png").default,
    day: false,
    type: "sunny",
  },
];

const WeatherCard = ({ day, type }) => {
  console.log("weather card");
  const imageSrc = weatherOptions.filter((i) => {
    // console.log(i);
    return i.day === day && i.type === type;
  });
  // console.log(imageSrc);
  // console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp} F</div>
      <img src={imageSrcUrl} className="weather_image" />
    </section>
  );
};

export default WeatherCard;
