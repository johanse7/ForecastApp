import React from "react";

const ForecastItem = ({ day, icon, description, tempMax, temMin }) => {
  return (
    <article className="card">
      <div className="info-day ">
        <img src={icon} alt="icon-forescat" />
        <span>
          {day} <br /> {description}
        </span>
      </div>
      <div className="info-degrees">
        <span>
          {temMin}° / {tempMax}°
        </span>
      </div>
    </article>
  );
};

export default ForecastItem;
