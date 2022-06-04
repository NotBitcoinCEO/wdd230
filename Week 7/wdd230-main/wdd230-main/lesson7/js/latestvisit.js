// initialize display elements
let elapsed = document.querySelector("#latestVisit");

// get the stored value in localStorage
let latestvisit = Number(window.localStorage.getItem("latestvisit"));
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// Calculate time between visits
const currentvisit = Date.now() - latestvisit;

// Convert time between visits into days
const daysbetween = currentvisit / (1000 * 60 *60 * 24);

// Create string update to be returned
if (numVisits !== 0) {
    elapsed.textContent = `Thank you for stopping by. You have visitied ${numVisits} times. It's been ${Math.round(daysbetween)} days since your latest visit.`;
} else {
    elapsed.textContent = `Welcome to Jefferson Chamber of Commerce!`;
}

// increment the number of visits.
numVisits++;

// store the latestvisit and visits-ls data.
localStorage.setItem("latestvisit", Date.now());
localStorage.setItem("visits-ls", numVisits);