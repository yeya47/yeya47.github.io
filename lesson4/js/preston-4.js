function dateTime(){
	let dateNow = document.lastModified;
	document.getElementById("currentdate").innerHTML= dateNow;
	let newYear = new Date().getFullYear();
	document.getElementById("year").innerHTML= newYear;
}