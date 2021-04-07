//*Source
const requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';

//* Fetch to obtain promise*//
fetch(requestURL)
.then(function(response){
    return response.json();
})
.then(function(jsonObject) {

    const towns =jsonObject['towns'];
    const cards = document.querySelector('.cards')

    towns.forEach(town => {
        if (town.name == 'Preston'|| town.name == 'Fish Haven'|| town.name == 'Soda Springs'){
        let card = document.createElement('section');   
        let h2 = document.createElement('h2');
        let motto = document.createElement('h3'); 
        let pimg = document.createElement('img');
        let yearFounded = document.createElement('p'); 
        let currentPopulation = document.createElement('p');
        let averageRainfall = document.createElement('p');
        
        //Tempalte literals*//
        h2.textContent = `${town.name}`;
        motto.textContent = `${town.motto}`;
        yearFounded.textContent = `Year Founded: ${town.yearFounded}`;
        currentPopulation.textContent = `Population: ${town.currentPopulation}`;
        averageRainfall.textContent = `Annual Rain Fall: ${town.averageRainfall}`;
        pimg.setAttribute('src',`images/${town.photo}`);
        pimg.setAttribute('alt',`Photo of: ${town.name}`)
 


        //*Card Append//
        
     card.append(h2);
     card.appendChild(motto)
     card.appendChild(yearFounded);
     card.appendChild(currentPopulation);
     card.appendChild(averageRainfall);
     card.append(pimg)
     cards.append(card);
    }
    });

    });