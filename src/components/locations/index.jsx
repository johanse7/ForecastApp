import React from "react";
import LocationItem from "./locationItem";
import newLocations from "../../assets/newLocations.jpg";
import "./locationsStyle.scss";

const LocationsList = ({ locations = [] }) => {
  return (
    <section className="row-item other-locations">
      {locations.map((location) => (
        <LocationItem key={location.id} {...location} />
      ))}

      <div className="img-location">
        <img src={newLocations} alt="locations" />
      </div>
    </section>
  );
};

export default LocationsList;
