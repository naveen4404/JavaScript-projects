const countryContainer = document.querySelector(".container");
const countryEntry = document.querySelector(".countries");

const showErr = function (message) {
  countryContainer.insertAdjacentText("beforebegin", message);
};
const renderCountry = function (data, cls = "") {
  const flag = data.flags.svg;
  const name = data.name.common;
  const region = data.region;
  const population = (data.population / 10000000).toFixed(2);
  const currency = data.currencies[Object.keys(data.currencies)[0]].name;
  const languages = Object.values(data.languages).slice(0, 2).join(",");
  const html = `
         <div class="countries ${cls}" >
            <img class="flag" src="${flag}" alt="" srcset="">
            <div class="details">
                <p class="name">${name}</p>
                <p class="region">${region}</p>
                <p class="population"><span class="symbol">🧑‍🤝‍🧑</span>${population}CR</p>
                <p class="language"><span class="symbol">🗣️</span>${languages}</p>
                <p class="currency"><span class="symbol">💰</span>${currency}</p>
            </div>
  `;
  countryContainer.insertAdjacentHTML("beforeend", html);
  countryContainer.style.opacity = 1;
};
// //XMLHttpRequest
// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(request.responseText);
//     console.log(data);
//     renderCountry(data);
//     if (!data.borders) return;

//     const neighbours = data.borders;
//     console.log(neighbours);
//     neighbours.forEach((neighbour) => {
//       const requestNeighnour = new XMLHttpRequest();
//       requestNeighnour.open(
//         "GET",
//         `https://restcountries.com/v3.1/alpha/${neighbour}`
//       );
//       requestNeighnour.send();

//       requestNeighnour.addEventListener("load", function () {
//         const [neighbourData] = JSON.parse(requestNeighnour.responseText);
//         renderCountry(neighbourData, "neighbour");
//       });
//     });
//   });
// };

// getCountry("ind");

// const getCountry = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//     .then((response) => response.json())
//     .then((data) => {
//       const [country] = data;
//       renderCountry(country);
//       if (!country.borders) return;
//       const [border] = country.borders;
//       return fetch(`https://restcountries.com/v3.1/alpha/${border}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data[0]));
// };

// getCountry("india");

//REVERSE GEO CODING

const reverseGeoCode = function (lat, lang) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lang}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Invalid latitude or longitude(${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      const countryName = data.countryName;
      return fetch(
        `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
      );
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`country not found (${response.status})`);
      }
      return response.json();
    })
    .then((data) => {
      const [country] = data;
      renderCountry(country);
    })
    .catch((err) => showErr(`some thing went wrong,${err.message}`));
};

reverseGeoCode(19.037, 72.873);
