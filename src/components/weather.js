import React from 'react';

const Weather = (props) => {
  return (
    <div>
        <div className="weather-info">
          { props.country && props.city && <div className="location">{props.city}, {props.country}</div> }

          { props.temperature && <div className="temp">{ Math.floor(props.temperature - 273.15) }°C</div> }

          { props.humidity && (
              <div className="weather__key">
                Humidity: <p className="weather__value">{props.humidity}</p>
              </div>
            ) 
          }

          { props.description && (
              <div className="weather__key">
                Conditions: <p className="weather__value capitalize">{props.description}</p>
              </div>
            ) 
          }
          
          { props.error && (
            <div className="weather__key">
              <p className="weather__value">{props.error}</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default Weather;
