
import './index.css';

import axios from "axios";
import moment from "moment";

import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [cityName, setCityName] = useState('');

  const submitHandler = (e) => {

    e.preventDefault();

    axios
      .get("https://teal-worrisome-macaw.cyclic.app/weather")
      .then((response) => {
        console.log(response);
        setWeatherData(response.data);
        console.log("weatherData : ", weatherData);
      })

      .catch((err) => {
        console.log("error: " + err);
      });

  }

  return (
    <div className="weather">
      <h1>Weather</h1>


      <form action="" onSubmit={submitHandler}>
        <input type="text"
          onChange={(e) => {
            setCityName(e.target.value)
          }} />
        <button>Submit</button>
      </form>

      {weatherData ?
        <div className="weatherData">
          <p className='city'>{cityName}</p>
          <p className=" date"> {moment(weatherData.serverTime).format('MMMM Do YYYY')} </p>
          <p className=" time"> {moment(weatherData.serverTime).format(' hh:mm a')} </p>

          <div className="itemDiv1">
            <p className="items humidity"> Humidity : {weatherData.humidity} </p>
            <p className="items temp"> Temprature : {weatherData.temp} </p>
          </div>

          <div className="itemDiv2">
            <p className="items minTemp"> Min : {weatherData.minTemp} </p>
            <p className="items maxTemp"> Max : {weatherData.maxTemp} </p>
          </div>

        </div>
        : null}
    </div>
  );
};

export default Weather;
