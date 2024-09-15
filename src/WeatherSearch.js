import React, {useState} from "react";
import axios from "axios";

export default function WeatherSearch() {
  const [weather, showWeather] = useState({});
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showCityTemp(response) {
    setLoaded(true);
    showWeather({
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.main.wind,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });

    console.log(response.data);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showCityTemp);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter a city..."
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity} %</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt="{weather.description}" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}

