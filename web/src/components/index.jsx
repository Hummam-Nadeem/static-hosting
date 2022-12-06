
import './index.css';

import axios from "axios";
import moment from "moment";

import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    axios
      .get("https://sparkling-bathing-suit-newt.cyclic.app/weather")
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
        console.log("weatherData : ", weatherData);
      })

      .catch((err) => {
        console.log("error: " + err);
      });
  }, []);

  return (
    <div className="weather">

      <h1>Weather</h1>

      {weatherData ?
        <div className="weatherData">

          <p className=" date"> {moment(weatherData.serverTime).format('MMMM Do YYYY')} </p>
          <p className=" time"> {moment(weatherData.serverTime).format(' hh:mm a')} </p>
          <p className="items humidity"> Humidity : {weatherData.humidity} </p>
          <p className="items temp"> Temprature : {weatherData.temp} </p>
          <p className="items minTemp"> Min : {weatherData.minTemp} </p>
          <p className="items maxTemp"> Max : {weatherData.maxTemp} </p>

        </div>
        : null}
    </div>
  );
};

export default Weather;
