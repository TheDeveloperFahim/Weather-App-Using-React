import React from "react";

export const WeatherCard = ({
  temp,
  humidity,
  pressure,
  weatherMood,
  name,
  speed,
  country,
  sunset,
}) => {
  const [weatherState, setWeatherState] = React.useState("");

  // Change weather mood icon
  React.useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Rain":
          setWeatherState("wi-rain");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherMood]);

  // converting second into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`} />
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">
              {name},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>

        {/* Four Column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset" />
              </p>
              <p className="extra-info-leftside">
                {timeStr} PM
                <br /> Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity" />
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br /> humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain" />
              </p>
              <p className="extra-info-leftside">
                {pressure}
                <br /> pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind" />
              </p>
              <p className="extra-info-leftside">
                {speed}
                <br /> speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

// https://youtu.be/EHTWMpD6S_0
