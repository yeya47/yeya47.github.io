let cityID = 5604473;
let appid = '6b7db5f6c8ffac4df697298da2f5a480';
const apiURL= `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  //Get Temp located in JSON file inside the main

  });