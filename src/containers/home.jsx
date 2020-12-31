import React from "react";
import Header from "../components/header";
import ListForecast from "../components/forecast";
import PlaceToVisit from "../components/placeVisit";
import Contacts from "../components/contacts";
import LocationsList from "../components/locations";
import useWeather from "../hooks/useWeather";
import Spinner from "../components/spinner";

const Home = () => {
  const { cityMainWeather, loader } = useWeather();
  debugger;
  return (
    <>
      {!loader ? (
        <>
          <Header
            icon={cityMainWeather?.weather?.icon}
            temp={cityMainWeather?.weather?.temp}
            description={cityMainWeather?.weather?.description}
          />
          <main className="main-content fade-anima">
            <ListForecast forecats={cityMainWeather?.forecasts} />
            <PlaceToVisit />
            <Contacts />
            <LocationsList locations={cityMainWeather?.otherLocations} />
          </main>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
