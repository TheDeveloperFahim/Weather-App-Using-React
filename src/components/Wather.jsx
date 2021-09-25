import { useEffect, useState } from "react";
import { WeatherCard } from "./WeatherCard";

export const Wather = () => {
  const [searchValue, setSearchValue] = useState("Bogra");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7c2d168333c3c59023bca8d44d0aab9d`;

      const respons = await fetch(url);
      const data = await respons.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunrise, sunset } = data.sys;

      const myWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getWeatherInfo(), []);

  return (
    <>
      <div className="warp">
        <div className="search">
          <input
            type="search"
            id="search"
            placeholder="Search..."
            className="searchTerm"
            autoFocus
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <button className="searchButton" onClick={getWeatherInfo}>
            search
          </button>
        </div>

        {/* Weather card */}
        <WeatherCard {...tempInfo} />
      </div>
    </>
  );
};
