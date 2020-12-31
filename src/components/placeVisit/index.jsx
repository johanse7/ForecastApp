import React from "react";
import placeVisit from "../../assets/PlaceVisit.jpg";
import "./placeVisitStyle.scss";

const PlaceToVisit = () => (
  <section className="row-item">
    <h2>
      Place to <span>visit</span>
    </h2>
    <img src={placeVisit} className="img-place-visit" alt="place visit" />
  </section>
);

export default PlaceToVisit;
