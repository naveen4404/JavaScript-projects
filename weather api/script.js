const apiKey = "3563201d2ed77da97b37b5f274bd66a1";

const searchText = document.querySelector(".city-search");
const searchBtn = document.querySelector(".search-btn");
const temp = document.querySelector(".temp-value");
const feels = document.querySelector(".feels-like");
const humidity = document.querySelector(".humid-value");
const wind = document.querySelector(".wind-value");
const cityName = document.querySelector(".city-name");
const image = document.querySelector(".image");
const date = document.querySelector(".time");
const description = document.querySelector(".weather");
const clear = function () {
  temp.textContent = 0;
  feels.textContent = 0;
  humidity.textContent = 0;
  wind.textContent = 0;
  cityName.textContent = "....";
  image.src = ``;
  description.textContent = "";
  date.textContent = "....";
  searchText.value = "";
};

const setValues = (data) => {
  temp.textContent = data.main.temp;
  feels.textContent = data.main.feels_like;
  humidity.textContent = data.main.humidity;
  wind.textContent = Math.ceil(data.wind.speed * 3.6);
  cityName.textContent = data.name;
  image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  description.textContent = data.weather[0].description;
  const time = new Date();
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };
  const displayTime = new Intl.DateTimeFormat("en-IN", options).format(time);
  date.textContent = displayTime;
};
searchBtn.addEventListener("click", async function () {
  const city = searchText.value.trim();
  // const getWeather = fetch(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
  // )
  //   .then((res) => {
  //     if (!res.ok) {
  //       throw new Error(`Country not found!!(${res.status})`);
  //     }
  //     return res.json();
  //   })
  //   .then((data) => {
  //     temp.textContent = data.main.temp;
  //     feels.textContent = data.main.feels_like;
  //     humidity.textContent = data.main.humidity;
  //     wind.textContent = Math.ceil(data.wind.speed * 3.6);
  //     cityName.textContent = data.name;
  //     image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  //     description.textContent = data.weather[0].description;
  //   })
  //   .catch((err) => {
  //     clear();
  //     description.textContent = err.message;
  //   })
  //   .finally(() => (searchText.value = ""));
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    console.log(response);
    if (!response.ok) {
      throw new Error("country not found!!");
    }
    const data = await response.json();
    setValues(data);
  } catch (err) {
    description.textContent = err.message;
  } finally {
    searchText.value = "";
  }
});

// navigator.geolocation.getCurrentPosition(
//   function (res) {
//     console.log(new Date(res.timestamp));
//   },
//   function (err) {
//     console.log(err);
//   }
// );
//PROMISIFYING THE GEOLOCATION API
// const getLocation = function () {
//   new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   }).then((res) =>
//     console.log(
//       `latitude : ${res.coords.latitude} longitude : ${res.coords.longitude}`
//     )
//   );
// };

// getLocation();

// const wait = async function (sec) {
//   //return new Promise(function () {
//   setTimeout(() => console.log(`waited for ${sec}`), sec * 1000);
//   //});
// };

// wait(2);
