// import { useState, useEffect } from "react";
// import axios from "axios";
import classes from "./Weather.module.css";

function Weather() {
  //     const [forcast, setForcast] = useState(null);

  //   useEffect(() => {
  //     if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(success, error);
  //     } else {
  //       console.log("Your browser doesnot support geolocation");
  //     }
  //     function success(position) {
  //       const latitude = position.coords.latitude;
  //       const longitude = position.coords.longitude;
  //       console.log(latitude, longitude);
  //       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=27fc1324afc7ac266bbab96297ba70af`;
  //       console.log(url);
  //       axios.get(url).then((response) => {
  //         // setForcast(response.data);
  //         console.log(response.data);
  //       });
  //     }
  //     function error(error) {
  //       console.log(error);
  //     }
  //   }, []);
  return (
    <div>
      <div className={classes.forcast}>
        {/* <p>
          Koblenz <span className="temprature">20°F</span>
        </p> */}
        <div className={classes.description}>
          <div className="temprature">
            <p>22°F</p>
            <p>Temprature</p>
          </div>
          <div className="feels">
            <p>24°F</p>
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>30%</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>12MPF</p>
            <p>Wind</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Weather;
