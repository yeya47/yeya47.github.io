//*Source
const requestURL= 'https://yeya47.github.io/Final/json/spacecity.json';

//* Fetch to obtain promise*//
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject) {

    const business =jsonObject['business'];
    const cards = document.querySelector('.cards')

    business.forEach(business => {
        if (business.name == 'EMG Center of Houston'|| business.name == 'Chevron Corporation'|| business.name == 'Prestige Auto & Metal Recycling'){
        let card = document.createElement('section');   
        let h2 = document.createElement('h2');
        let phone = document.createElement('h3'); 
        let pimg = document.createElement('img');
        let address= document.createElement('p'); 
        let website = document.createElement('p');
       
        
        //Tempalte literals*//
        h2.textContent = `${business.name}`;
        phone.textContent = `${business.phone}`;
        address.textContent = `${business.address}`;
        website.textContent = ` ${business.website}`;
        pimg.setAttribute('src',`images/${business.photo}`);
        pimg.setAttribute('alt',`Photo of: ${business.name}`)
 


        //*Card Append//
     card.append(pimg)   
     card.append(h2);
     card.appendChild(phone)
     card.appendChild(address);
     card.appendChild(website);
     cards.append(card);
    }
    });

    });