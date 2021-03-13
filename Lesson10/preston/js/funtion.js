//*Toggle for responsive menu*//
function toggleMenu(){
	
	document.getElementById("primeNav").classList.toggle("hide");
}

//*End*//
//*Displays Current Date on Footer*//
let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
	

let months=[
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"

];


let d = new Date() ;
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
let fulldate = dayName +", " + monthName + " " + d.getDate() + ", " + year;

document.getElementById("currentdate").textContent = fulldate;
//*END//*
//
//* Displays message box on fridays*//

function displaybox(){
    var now = new Date();
    var month = now.getMonth();
    var dayOfMonth = now.getDate();
    var dayOfWeek = now.getDay();
     
    let alarm = " "


    
     
       if  (dayOfWeek == 5 ){ 
          alarm = "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion. "
       }
          else { alarm= "Try again Friday"
        }
     
    

document.getElementById("output").innerHTML = alarm
}
//


//Windchill
function windChill(){
    let t= parseFloat(document.getElementById("temperature").innerHTML);
    let s = parseFloat(document.getElementById('windspeed').innerHTML);
    let f;
    let chill;
    let newf;
    if(t <= 50 && s > 3){
        f = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16));
        chill= `${f.toFixed(2)}°F`;
    }
        else{
         chill= "N/A";
        }
        document.getElementById('windChill').innerHTML = chill;
}
//End//