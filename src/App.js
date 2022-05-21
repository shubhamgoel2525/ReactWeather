import React, { useState } from "react";

import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

var unsplash_key =
  "1b1c5e55468e9f256075cf1086af0d2b991b94090494ffba7777f4a4e71a4b65";

const App = () => {
  const [info, setInfo] = useState({
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  });

  const getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}`
    );

    const response = await api_call.json();

    // debugging
    console.log(response);

    const query = response.weather[0].description;

    // debugging
    console.log(query);

    const random = Math.floor(Math.random() * 4);

    fetch(
      `https://api.unsplash.com/search/photos/?query=${query}&client_id=${unsplash_key}`
    )
      .then((res) => res.json())
      .then((data) => {
        // debugging
        console.log(data);

        const backimage = document.getElementsByClassName("app-container");

        backimage[0].style.backgroundImage = `url(${data.results[random].urls.regular})`;
      });

    //Conditional check for both fields
    const weatherDescrip = response.weather[0].description;

    if (city && country) {
      setInfo({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description:
          weatherDescrip.charAt(0).toUpperCase() + weatherDescrip.slice(1),
        error: "",
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
