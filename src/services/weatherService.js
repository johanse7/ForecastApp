import config from "../config";
import { fetchRequest } from "../utils/index";

export const getWeatherByCity = async ({ name }) => {
  const response = await fetchRequest({
    url: `${config.urlApi}/weather?q=${name}&appid=${config.keyApi}&units=metric`,
  });

  return response;
};

export const getForecatsByCity = async ({ name }) => {
  const response = await fetchRequest({
    url: `${config.urlApi}/forecast?q=${name}&appid=${config.keyApi}&units=metric`,
  });
  return response;
};
