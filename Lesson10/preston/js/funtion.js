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
var temp= 66;
var wSpeed= 10;
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windChill").innerHTML= windChill;
//End//