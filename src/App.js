import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <WeatherSearch />
      </header>
      <p className="Links">
        This Project was coded by <a href="blank">Kenya Johnson</a> and{" "}
        <a href="https://github.com/KenJohn28/Weatther-Search-App">
          is open-sourced on Github{" "}
        </a>{" "}
        and{" "}
        <a href="https://kjs-weather-search-app.netlify.app/">
          hosted on Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
