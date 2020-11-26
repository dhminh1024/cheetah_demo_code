import React from "react";

const WeatherInfo = ({ weather }) => {
  const tempCelcius = weather ? (weather.main.temp - 273.15).toFixed(2) : "";
  return (
    <div>
      <h1>{weather?.name}</h1>
      <h2 className="text-info">{tempCelcius} °C</h2>
      <h2 className="text-success text-uppercase">
        {weather?.weather[0]?.description}
      </h2>
    </div>
  );
};

export default WeatherInfo;
