import React from 'react';

const Form = ({ loadWeather }) => {
  return (
    <form onSubmit={loadWeather}>
      <input type="text" name="city" placeholder="City..." />

      <input type="text" name="country" placeholder="Country..." />

      <button className="btn-custom">Get Weather</button>
    </form>
  )
}

export default Form;
