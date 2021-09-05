import React from 'react';

const Weather = (props) => {
  return (
    <div>
        <div className="weather-info">
          { props.country && props.city && <div className="location">{props.city}, {props.country}</div> }

          { props.temperature && <div className="temp">{ Math.floor(props.temperature - 273.15) }°C</div> }

          { props.humidity && (
              <p className="weather__key">
                Humidity: <div className="weather__value">{props.humidity}</div>
              </p>
            ) 
          }

          { props.description && (
              <p className="weather__key">
                Conditions: <div className="weather__value capitalize">{props.description}</div>
              </p>
            ) 
          }
          
          { props.error && (
            <p className="weather__key">
              <div className="weather__value">{props.error}</div>
            </p>
          )}
      </div>
    </div>
  )
}

export default Weather;
