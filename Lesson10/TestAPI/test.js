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

  });*/
 
  const apiURL2= 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=6b7db5f6c8ffac4df697298da2f5a480&units=imperial';

fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
  //console.log(jsObject);
  //Get Temp located in JSON file inside the main
   
   //reduce list to 5 .. filter 
   // filter take array jsObject.list.filter 
   //feed filter condition ex: 'string.includes('condition1800'
   //loop forecast
 /*let day = 0;
   const dayoW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
   const five = jsObject.list.filter((x) => x.dt_txt.includes('18:00:00'));
   console.log(five);
   five.forEach(x=>{
   let d = new Date(x.dt_txt);
   console.log(x.dt_txt);
   document.getElementById(`dayoW${day+1}`).textContent= dayoW[d.getDay()];
   document.getElementById(`ftemperature${day+1}`).textContent = x.main.temp;
   let icon = x.weather[0].icon;
   document.getElementById(`icon${day+1}`).src =`https://openweathermap.org/img/wn/${icon}@2x.png`;
   d++;*/
   var i = 1;
   jsObject.list.forEach(element => {
       //console.log(element.dt_txt)
       if (element.dt_txt.includes("18:00")) {
           //console.log(element.dt_txt);
           let day = 0;
           let today = new Date();

           const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
           const imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';

           document.getElementById('dayoW' + i).innerHTML = weekdays[(today.getDay() + i) % 7];
           document.getElementById('icon' + i).setAttribute('src', imagesrc);
           document.getElementById('ftemperature' + i).innerHTML = Math.round(element.main.temp) + " &deg; F";
           i++;
       }
 });

});

/*Source*/
const requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';

/* Fetch to obtain promise*/
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject) {

    const towns =jsonObject['towns'];
    const cards = document.querySelector('.cards')

    towns.forEach(town => {
        if (town.name == 'Fish Haven'){
        let card = document.createElement('section');   
        let h2 = document.createElement('h2');
        let events = document.createElement('h1');

        
        //Tempalte literals*//
        events.textContent=`Upcoming Events: ${town.events}`
      


        //*Card Append//
        
     card.append(h2);
     card.appendChild(events);
 
    
     cards.append(card);
    }
    });

    });

