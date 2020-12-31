import React from "react";
import "./forecastStyle.scss";
import ForecastItem from "./forecastItem";

const ListForecast = ({ forecats = [] }) => {
  return (
    <section className="row-item">
      <h2>
        3 Days <span>Forecast</span>
      </h2>
      {forecats.map(({ id, description, day, icon, tempMax, temMin }) => (
        <ForecastItem
          key={id}
          day={day}
          icon={icon}
          description={description}
          temMin={temMin}
          tempMax={tempMax}
        />
      ))}
    </section>
  );
};

export default ListForecast;
