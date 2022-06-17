const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayProphets(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayProphets(data) {
 
  data.prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let birthdate = document.createElement('p');
    let birthplace = document.createElement('p');
    let portrait = document.createElement('img');
  
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    birthplace.textContent = `Birth Place: ${prophet.birthplace}`;
    birthdate.textContent = `Birth Date: ${prophet.birthdate}`;
  
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Depiction of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  

    card.appendChild(h2);
    card.appendChild(birthdate);
    card.appendChild(birthplace);
    card.appendChild(portrait);

    cards.appendChild(card);
});
}

getProphets();