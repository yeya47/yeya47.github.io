/*Api for actual weather info*/
const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //  console.log(jsObject);
  const temperature = document.querySelector('#current-temp');
  currentTemp.textContent = jsObject.main,temp
  });