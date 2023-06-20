import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Weather.module.css";
import {
  BsThermometerSun,
  BsWind,
  BsThermometerHalf,
  BsDropletHalf,
} from "react-icons/bs";

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
    <div className="sm:container relative flex justify-center sm:justify-end">
      <div className={classes.forcast}>
        {forcast && (
          <>
            <div className={classes.description}>
              {/* <div className={classes.city_name}>{forcast.name}</div> */}
              <div>
                <BsThermometerHalf className="text-2xl inline-block" />
                <p>{(((forcast.main.temp - 32) * 5) / 9).toFixed()}°C</p>
                <p className="text-sm">Temprature</p>
              </div>
              <div>
                <BsThermometerSun className="text-2xl inline-block" />
                <p>{(((forcast.main.feels_like - 32) * 5) / 9).toFixed()}°C</p>
                <p className="text-sm">Feels</p>
              </div>
              <div>
                <BsDropletHalf className="text-2xl inline-block" />
                <p>{forcast.main.humidity.toFixed()}%</p>
                <p className="text-sm">Humidity</p>
              </div>
              <div>
                <BsWind className="text-2xl inline-block" />
                <p>{forcast.wind.speed}MPF</p>
                <p className="text-sm">Wind</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export default Weather;
