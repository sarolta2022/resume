import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(true);

  const key = "fab7856e7dacac7abe0dcb9574a299c4";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`;

  const searchLocation = async (event) => {
    if (event.key === "Enter") {
      await axios.get(url).then((response) => {
        setData(response.data);
        console.log(data);
      });
      setLocation("");
    }
  };

  useEffect(() => {
    setLocation("Budapest");
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    }, []);
  });

  return (
    <div>
      <p>Weather</p>
      {loading && <p>Loading...</p>}
      <input
        value={location}
        type="text"
        onKeyPress={searchLocation}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter location"
      ></input>
      <p>City:{data.name}</p>

      {data.main ? <p>Temperature:{data.main.temp}</p> : null}
      {data.weather ? <p>Cloudy:{data.weather[0].main}</p> : null}
      <p>Humidity:{data.weather ? <p>{data.main.humidity}%</p> : null}</p>
    </div>
  );
};

export default Weather;
