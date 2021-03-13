/*Api for actual weather info*/
const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //  console.log(jsObject);
  //Get Temp located in JSON file inside the main
  const temperature = document.querySelector('#temperature');
  temperature.textContent = jsObject.main.temp;
  //Get image
  const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
  });

  /*const apiURL= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  Get Temp located in JSON file inside the main

  });/*