import { useEffect, useState } from "react";
import {
  getWeatherByCity,
  getForecatsByCity,
} from "../services/weatherService";
import { getUrlIcon, groupArrayByDate, getDayName } from "../utils";

const useWeather = ({
  cityNameMain = "bogota",
  otherLocations = ["paris", "monaco"],
} = {}) => {
  const [cityMainWeather, setCityMainWeather] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const [
          weather,
          forecastResult,
          otherLocationsResult,
        ] = await Promise.allSettled([
          buildDataWeatherMainCity({ name: cityNameMain }),
          buildDataForecast({ name: cityNameMain }),
          builDataOtherLocations(otherLocations),
        ]);

        setCityMainWeather({
          weather: weather.value,
          forecasts: forecastResult.value,
          otherLocations: otherLocationsResult.value,
        });

        setLoader(false);
      } catch (error) {
        console.log(error.toString());
        setLoader(false);
      }
    })();
  }, [cityNameMain]);

  return {
    cityMainWeather,
    loader,
  };
};

const buildDataWeatherMainCity = async ({ name }) => {
  const { main, weather, wind, id, name: city } = await getWeatherByCity({
    name,
  });
  const [mainWeather] = weather;

  return {
    icon: getUrlIcon(mainWeather.icon),
    description: mainWeather.main,
    temp: Math.round(main.temp),
    humidity: main.humidity,
    speed: wind.speed,
    id,
    name: city,
  };
};

const buildDataForecast = async ({ name }) => {
  const results = await getForecatsByCity({ name });

  const forecasts = groupArrayByDate(results.list, "dt_txt");

  const dateCurreny = new Date().toDateString();
  return forecasts
    .filter(({ key }) => dateCurreny !== key)
    .map((forescast) => {
      const weatherMin = forescast.data[0];
      const weatherMax = forescast.data[forescast.data.length - 1];
      const weather = weatherMax.weather[0];
      return {
        id: weatherMax.dt,
        day: getDayName(new Date(forescast.key)),
        icon: getUrlIcon(weather.icon),
        description: weather.main,
        tempMax: Math.round(weatherMax.main.temp_max),
        temMin: Math.round(weatherMin.main.temp_max),
      };
    })
    .slice(0, 3);
};

const builDataOtherLocations = async (locations) => {
  const resultForescast = await Promise.allSettled(
    locations.map((location) => buildDataWeatherMainCity({ name: location }))
  );

  return resultForescast.map(({ value }) => ({ ...value }));
};

export default useWeather;
