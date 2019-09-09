//Zomato Fetching
const restaurantAPI = {

    fetchRestaurants: function(idNum){ //Fetches and parses JSON data.
        return fetch(`https://developers.zomato.com/api/v2.1/search?cuisines=${idNum}&entity_id=1138&entity_type=city&sort=rating&apikey=13e3621c981ec21f6d5716798b751e36`)
        .then(r => r.json())
    },

    fillEntry : function(entry, indexNum) { //Makes a span and names it with the id of the index along with a buttton
        //with the same number.
        return `
        <div class = "restaurantListBox">
        <div id = "restaurant-${indexNum}" class = "restaurantListing"> ${entry.restaurant.name} </div>
        <a href="${entry.restaurant.url}">Website</a>
        <input type = "button" id = "save-${indexNum}" class = "saveButton" value="Save">
        </div>
        `
    },

    fillArticle: function(parsedData) { //Function that populates results based on Restaurant data
        const resultsDOM = document.querySelector(".dom"); //Calls results article
        
        while (resultsDOM.firstChild) { // Clears Results article for new results
            resultsDOM.removeChild(resultsDOM.firstChild);
          }

        for(let i = 0; i < Object.keys(parsedData.restaurants).length; i++){ // For each search result...
            resultsDOM.innerHTML += this.fillEntry(parsedData.restaurants[i], i); //Create new DOM elements
        }

        this.applyEvents()

    },

    applyEvents: function() { //Function gets all of the save buttons and assigns them/
        const saveButtonList = document.querySelectorAll(".dom .saveButton") //makes an array 
        //of every save button in the .dom element.

        for(let i = 0; i < saveButtonList.length; i++){ //For every button on the list
            saveButtonList[i].addEventListener("click",restaurantSaveEvent) //add the event listener
            //from main.js
        }
    }

}