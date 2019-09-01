import React from "react";
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";

var Api_Key = "337d351936e39e0032a988f267614961";
var unsplash_key = "1b1c5e55468e9f256075cf1086af0d2b991b94090494ffba7777f4a4e71a4b65";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="app-container container-fluid">
            <Titles />
            <Form loadWeather={this.getWeather} />
            <Weather
              temperature={this.state.temperature}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
  getWeather = async e => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`
    );
    const response = await api_call.json();
    console.log(response);
    var query = response.weather[0].description;
    console.log(query);
    var random = Math.floor(Math.random() * 4);
    fetch(`https://api.unsplash.com/search/photos/?query=${query}&client_id=${unsplash_key}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);                                                                  //Test the API
      var backimage = document.getElementsByClassName("app-container");
      backimage[0].style.backgroundImage = `url(${data.results[random].urls.regular})`;
    });
    //Conditional check for both fields
    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1),
        error: ""
      });
    } else {
      this.setState({
        error: "Please enter the values..."
      });
    }
  };
}

export default App;
