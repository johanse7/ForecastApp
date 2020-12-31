import React from "react";
import Header from "../components/header";
import ListForecast from "../components/forecast";
import PlaceToVisit from "../components/placeVisit";
import Contacts from "../components/contacts";
import LocationsList from "../components/locations";
import useWeather from "../hooks/useWeather";
import Spinner from "../components/spinner";
import "../styles/base/_animations.scss";

const Home = () => {
  const { cityMainWeather, loader } = useWeather();

  return (
    <>
      {!loader ? (
        <main className="fade-anima">
          <Header
            icon={cityMainWeather?.weather?.icon}
            temp={cityMainWeather?.weather?.temp}
            description={cityMainWeather?.weather?.description}
          />
          <section className="main-content ">
            <ListForecast forecats={cityMainWeather?.forecasts} />
            <PlaceToVisit />
            <Contacts />
            <LocationsList locations={cityMainWeather?.otherLocations} />
          </section>
        </main>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
