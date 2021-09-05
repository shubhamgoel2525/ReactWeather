import React, { useState } from "react";

import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

const App = () => {
  const [info, setInfo] = useState({ 
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  });

  const getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`
    );
    const response = await api_call.json();

    //Conditional check for both fields
    if (city && country) {
      setInfo({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      });
    } else {
      setInfo({ ...info, error: "Please enter the values..." });
    }
  };

  return (
    <div>
      <div className="wrapper">
        <div className="app-container container-fluid">
          <Titles />

          <Form loadWeather={getWeather} />

          <Weather
            temperature={info.temperature}
            city={info.city}
            country={info.country}
            humidity={info.humidity}
            description={info.description}
            error={info.error}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
