/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const GUNDAM_URL = "https://m.media-amazon.com/images/M/MV5BZjI2N2EyNzktZWVjMi00YTFkLTk4MjMtNzJlMTE1MjMzZGNkXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_FMjpg_UX1000_.jpg"
const ZETA_GUNDAM_URL = "https://image.tmdb.org/t/p/original/pmErEd15QbO05OJ3awhr7jvs8LQ.jpg"
const ZZ_GUNDAM_URL = "https://image.tmdb.org/t/p/original/8zChoG9PiXcScH8K7s05IBVi7eF.jpg"
const Eighth_MS_TEAM_URL = "https://image.tmdb.org/t/p/original/zdORwSELKK30P8hWSP2YJgfdcV.jpg"
const GUNDAM_SEED_URL = "https://m.media-amazon.com/images/M/MV5BMmU5OTNmYmQtMTJhZS00MjIxLWJjZTAtMmQzMWMzMjY4NjllXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_.jpg"
const GUNDAM_WING_URL = "https://m.media-amazon.com/images/I/51MaZNz8qSL._AC_UF894,1000_QL80_.jpg"
const GUNDAM_SEED_DESTINY_URL = "https://m.media-amazon.com/images/M/MV5BZTVjODAzOWItOThhZS00M2FkLWFiOTQtYTIzMzQ2MjJiZWEyXkEyXkFqcGdeQXVyMjc2Nzg5OTQ@._V1_FMjpg_UX1000_.jpg"
const GUNDAM_00_URL = "https://m.media-amazon.com/images/M/MV5BNzQ0MDU0MWYtMGMxYy00YjJkLTllNmQtNTkyZDRhYjkzZTExXkEyXkFqcGdeQXVyMTA3OTEyODI1._V1_FMjpg_UX1000_.jpg"

// This is an array of strings (TV show titles)
let titles = [
    //"Fresh Prince of Bel Air" :FRESH_PRINCE_URL,
    //"Curb Your Enthusiasm" : CURB_POSTER_URL,
    //"East Los High": EAST_LOS_HIGH_POSTER_URL,
    {"title" : "Gundam", "url": GUNDAM_URL, "year" : 1979},
    {"title":"Zeta Gundam", "url" : ZETA_GUNDAM_URL, "year": 1985},
    {"title": "ZZ Gundam", "url" : ZZ_GUNDAM_URL, "year": 1986},
    {"title":"Eighth MS", "url":Eighth_MS_TEAM_URL, "year": 1996},
    {"title":"Gundam Seed",  "url" : GUNDAM_SEED_URL, "year": 2002},
    {"title":"Gundam Wing", "url" : GUNDAM_WING_URL, "year" : 1995},
    {"title": "Gundam Seed Destiny", "url" : GUNDAM_SEED_DESTINY_URL, "year" : 2004},
    {"title":"Gundam 00", "url" : GUNDAM_00_URL, "year": 2007},


];
function popLast(map) {
    const keys = Object.keys(map);
    if (keys.length === 0) {
        return null; // Return null if the object is empty
    }
    const lastKey = keys[keys.length - 1]; // Get the last key
    const value = map[lastKey];
    delete map[lastKey]; // Delete the last key-value pair
    return [lastKey, value];
}
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");
    
    
    for (let i = 0; i < titles.length; i++) {
        //let title = titles[i].string;

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let item = titles[i];
        let title = item.title;
        let imageURL = item.url;
        let year = item.year;
        /*if (i == 0) {
            imageURL = FRESH_PRINCE_URL;
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }*/

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL, year); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL, newYear) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    const yearAdder = card.querySelector("ul");
    yearAdder.textContent = "Released in " + newYear;

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

function sortItemsByYearAscending() {
    titles.sort((a, b) => a.year - b.year);
}

function sortItemsByYearDescending() {
    titles.sort((a, b) => b.year - a.year);
}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    popLast(titles); 
    showCards();
}

function handleSortAscendingClick() {
    sortItemsByYearAscending();
    showCards(); 
}

function handleSortDescendingClick() {
    sortItemsByYearDescending();
    showCards(); 
}
function addCard() {
    const title = document.getElementById("newTitle").value;
    const url = document.getElementById("newUrl").value;
    const year = parseInt(document.getElementById("newYear").value);

    if (title && url && year) {
        // Add the new card to the array
        titles.push({ title: title, url: url, year: year });
        sortItemsByYearAscending();
        showCards();
        closeAddCardModal();
    } else {
        alert("Please fill in all fields.");
    }
}

function openAddCardModal() {
    const modal = document.getElementById("add-card-modal");
    modal.style.display = "block";
}

function closeAddCardModal() {
    const modal = document.getElementById("add-card-modal");
    modal.style.display = "none";
}

