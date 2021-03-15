const apiURL2= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial';

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
  console.log(jsObject);
  //Get Temp located in JSON file inside the main
   let day = 0;
   const dayoW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
   //reduce list to 5 .. filter 
   // filter take array jsObject.list.filter 
   //feed filter condition ex: 'string.includes('comdition1800'
   //loop forecast
  // const five = jsObject.list.filter(list.dt_txt== '18:00:00');
  // five.forEach(x=>{
   let d = new Date(jsObject.list[4].dt_txt);
   console.log(d);
   document.getElementById(`dayoW${day+1}`).textContent= dayoW[d.getDay()];
   document.getElementById(`ftemperature${day+1}`).textContent = jsObject.list[4].main.temp;
   //d++
// });
});