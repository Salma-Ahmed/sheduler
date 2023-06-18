import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Weather.module.css";

function Weather() {
  const [forcast, setForcast] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Your browser doesnot support geolocation");
    }
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log(latitude, longitude);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=27fc1324afc7ac266bbab96297ba70af`;
      console.log(url);
      axios.get(url).then((response) => {
        setForcast(response.data);
        console.log(response.data);
      });
    }
    function error(error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      <div className={classes.forcast}>
        {forcast && (
          <>
            <div className={classes.description}>
              <div className={classes.city_name}>{forcast.name}</div>
              <div>
                <p>{(((forcast.main.temp - 32) * 5) / 9).toFixed()}°C</p>
                <p>Temprature</p>
              </div>
              <div>
                <p>{(((forcast.main.feels_like - 32) * 5) / 9).toFixed()}°C</p>
                <p>Feels Like</p>
              </div>
              <div>
                <p>{forcast.main.humidity.toFixed()}%</p>
                <p>Humidity</p>
              </div>
              <div>
                <p>{forcast.wind.speed}MPF</p>
                <p>Wind</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Weather;
