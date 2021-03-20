/*Api for actual weather info*/
const apiURL= 'https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
  //Get Temp located in JSON file inside the main
  const temperature = document.querySelector('#temperature');
  temperature.textContent = jsObject.main.temp;
  const maxTemp = document.querySelector('#maxtemp');
  maxTemp.textContent = jsObject.main.temp_max;
  const windSpeed = document.querySelector('#windspeed');
  windSpeed.textContent = jsObject.wind.speed;
  const humidityprcnt = document.querySelector('#humidity');
  humidityprcnt.textContent = jsObject.main.humidity;
  windChill();
  //Get image
  /* const imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`; // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
*/
  }); 

const apiURL2= 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial';

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
  //Get Temp located in JSON file inside the main
   
   //reduce list to 5 .. filter 
   // filter take array jsObject.list.filter 
   //feed filter condition ex: 'string.includes('condition1800'
   //loop forecast
   let day = 0;
   const dayoW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
   const five = jsObject.list.filter((x) => x.dt_txt.includes('18:00:00'));
   //console.log(five);
   five.forEach((x)=>{
   let d = new Date(x.dt_txt);
   console.log(x.dt_txt);
   document.getElementById(`dayoW${day+1}`).textContent= dayoW[d.getDay()];
   document.getElementById(`ftemperature${day+1}`).textContent = x.main.temp;
   let icon = x.weather[0].icon;
   document.getElementById(`icon${day+1}`).src =`https://openweathermap.org/img/wn/${icon}@2x.png`;
   day++;
 });
});