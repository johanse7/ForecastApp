import React from "react";
import "./headerStyle.scss";
import banner from "../../assets/banner.jpg";
import btnDark from "../../assets/btnDark.png";
import btnLight from "../../assets/btnLight.png";

const Header = ({ icon, temp, description }) => {
  return (
    <>
      <header className="content-header">
        <img src={banner} loading="lazy" alt="forecast" />
        <div className="main-forecast">
          <img src={btnDark} className="img-dark" alt="icon-forecast" />
          <div className="forecast-icon">
            <img src={icon} alt="weather-info" />
            <span className="description">{description}</span>
          </div>
          <img src={btnLight} alt="icon-forecast" />
          <div className="info-forecast">
            <span>{`${temp}°c`}</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
