//*submit page link*//
function myFunction() {
    window.location.href="https://yeya47.github.io/Lesson8/form/thanks.html";
  }//*Select Input function*//
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


