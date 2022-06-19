const requestURL = 'https://notbitcoinceo.github.io/wdd230/lesson9/data.json';
const cards = document.querySelector(".cards");n

async function getAffiliates() {
  let response = await fetch(requestURL);
  if (response.ok) {
    let data = await response.json();
    displayAffiliates(data);
  } else {
    throw Error(response.statusText);
  }
}

function displayAffiliates(data) {

  data.affiliates.forEach(affiliate => {
    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let website = document.createElement('p');
    let image = document.createElement('img');
    let membership = document.createElement('p');

    h3.textContent = `${affiliate.name}`;
    phone.textContent = `Phone: ${affiliate.phone}`;
    email.textContent = `Email: ${affiliate.email}`;
    website.textContent = `Website: ${affiliate.website}`;
    membership.textContent = `${affiliate.membership} Member`;

    image.setAttribute('src', affiliate.image);
    image.setAttribute('alt', `Company logo of ${affiliate.name}, Jefferson Chamber of Commerce Affiliiate`);
    image.setAttribute('loading', 'lazy');

    card.classList.add('card')
    card.classList.add('cardborder')
    card.appendChild(h3);
    card.appendChild(image);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(website);
    card.appendChild(membership);

    document.querySelector('div.cards').appendChild(card);
});
}

getAffiliates()

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");

gridbutton.addEventListener("click", () => {
	cards.classList.add("grids");
	cards.classList.remove("lists");
});

listbutton.addEventListener("click", () => {
	cards.classList.add("lists");
	cards.classList.remove("grids");
});