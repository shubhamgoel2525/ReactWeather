import React from 'react';

const Weather = (props) => {
  return (
    <div className="weather-info">
      {
        props.country && props.city && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>
      }
      {
        props.temperature && <p className="weather__key">Temperature: <span className="weather__value">{props.temperature - 273.15}°C</span></p>
      }
      {
        props.humidity && <p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>
      }
      {
        props.description && <p className="weather__key">Conditions: <span className="weather__value">{props.description}</span></p>
      }
      {
        props.error && <p className="weather__key"><span className="weather__value">{props.error}</span></p>
      }
    </div>
  )
}

export default Weather;
