import React from "react";

const LocationItem = ({ icon, temp, name, speed, humidity }) => {
  return (
    <article className="location-item">
      <div className="header">
        <div className="icon-city">
          <img src={icon} alt="city"></img>
        </div>
        <p className="degrees-city">{temp}°c</p>
        <hr />
        <p className="info-city">
          <span className="country">{name}</span> <br />
          <span className="city">France</span>
        </p>
      </div>
      <div className="info-aditional">
        <span>Humidity {humidity}%</span>
        <span>West</span>
        <span>{speed} Km/h</span>
      </div>
    </article>
  );
};

export default LocationItem;
