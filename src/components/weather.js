import React from 'react';

const Weather = ({temperature, city, country, humidity, description, error}) => {
  return (
    <div>
        <div className="weather-info">
          { country && city && <div className="location">{city}, {country}</div> }

          { temperature && <div className="temp">{ Math.floor(temperature - 273.15) }°C</div> }

          { humidity && (
              <div className="weather__key">
                Humidity: <p className="weather__value">{humidity}</p>
              </div>
            ) 
          }

          { description && (
              <div className="weather__key">
                Conditions: <p className="weather__value capitalize">{description}</p>
              </div>
            ) 
          }
          
          { error && (
            <div className="weather__key">
              <p className="weather__value">{error}</p>
            </div>
          )}
      </div>
    </div>
  )
}

export default Weather;
