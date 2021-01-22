let daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
let months = [
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
let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
let fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
document.getElementById("currentdate").textContent = fulldate;
// ****************************
try {
  let options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  document.getElementById('currentdate2').textContent = new Date().toLocaleDateString('en-US', options);
//*} catch (e) {
 //* alert('Error with code or your browser does not support Locale');
    }}

// problme with toLocaleDateString order ... 

