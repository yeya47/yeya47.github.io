//*submit page link*//

  //*Select Input function*//
function selectResponse() {
	const s = document.querySelector('#selected')
	const sel = document.querySelector('#selectbrowser');
	s.style.display = "block";
	s.textContent = sel.value;
	
}

//* Storm Raiting*//
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}


