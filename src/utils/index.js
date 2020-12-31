export const getUrlIcon = (icon) =>
  `https://openweathermap.org/img/w/${icon}.png`;

export const groupArrayByDate = (array, key) => {
  const groups = array.reduce((groups, item) => {
    const date = new Date(item[key]).toDateString();

    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(item);
    return groups;
  }, {});

  return Object.keys(groups).map((key) => ({
    key,
    data: groups[key],
  }));
};

export const getDayName = (date) =>
  date.toLocaleString("en-GB", { weekday: "long" });

export const fetchRequest = ({ method = "GET", url } = {}) => {
  const req = new XMLHttpRequest();

  req.open(method, url, true);
  req.send();

  return new Promise((resolve, reject) => {
    req.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        resolve(JSON.parse(req.responseText));
      }
    };
    req.onerror = function () {
      reject("An error occurred during the transaction");
    };
  });
};
