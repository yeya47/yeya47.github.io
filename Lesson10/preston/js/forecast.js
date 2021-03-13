const apiURL= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=ba97b5cb5c3609a3d6e81b6d4ce53791&units=imperial'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  //Get Temp located in JSON file inside the main

  });