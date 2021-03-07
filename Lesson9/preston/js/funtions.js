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
//* Webfont Js//*
WebFont.load({
    google: {
      families: ['Gentium Book Basic', 'Merriweather']
    }
  });

  //*End*//


