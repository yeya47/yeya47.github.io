//*Source
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';

//*fetch to obtain promise.
//*
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   //console.table(jsonObject);  // temporary checking for valid response and data parsing
  
   const prophets = jsonObject['prophets'];

   const cards = document.querySelector('.cards')

    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2'); 
      let pimg = document.createElement('img');
      let birthdate = document.createElement('p'); 
      let birthplace = document.createElement('p');
    //Template literals
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
     birthdate.textContent=`Date of Birth:  ${prophet.birthdate}`;
     birthplace.textContent=`Birth Place:  ${prophet.birthplace}`;
     pimg.setAttribute('src',prophet.imageurl);
     pimg.setAttribute('alt',`${prophet.name} ${prophet.lastname} - ${prophet.order}`);

     card.append(h2);
     card.appendChild(birthdate);
     card.appendChild(birthplace);
     card.append(pimg);
     cards.append(card);
     });
});
    /* const utah = document.querySelector('.utah');
     const utahfilter = prophets.filter(x => x.birthplace == "Utah");

  
    h2.textContent= `${utahprophet.name} ${utahprophet.lastname}`;
    pimg.setAttribute('src',utahprophet.imageurl);
    pimg.setAttribute('alt',`Portrait of ${utahprophet.name} who was born in ${utahprophet.birthplace} in the year ${utahprophet.birthdate.substring(utahprophet.birthdate.length -4)}!`)
    pimg.style.boxShadow= '0 0 30px #333';
    pimg.style.width= '200px';

   

 
  
 }); */
