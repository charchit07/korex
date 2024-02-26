import React, { useState } from 'react';
import WeatherComponent from './Weather';
import "../Styles/Dropdown.modules.css"


function Dropdown() {
  const [selectedCity, setSelectedCity] = useState('');

  const handleSelectChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="container">
      <h1>Select a City</h1>
      <select value={selectedCity} onChange={handleSelectChange}>
        <option value="">Select a city...</option>
        <option value="Ho Chi Minh">Ho Chi Minh</option>
        <option value="Singapore">Singapore</option>
        <option value="Kuala Lumpur">Kuala Lumpur</option>
        <option value="Tokyo">Tokyo</option>
        <option value="Athens">Athens</option>
      </select>
      {selectedCity && <p>You selected: {selectedCity}</p>}
      <WeatherComponent city={selectedCity} /> 
    </div>
  )
}

export default Dropdown;
