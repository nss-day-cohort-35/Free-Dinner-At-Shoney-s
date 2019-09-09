//Restaurant Button Functions
const restaurantSaveEvent = (event) => {
    const restaurantEntryNum = event.target.id.split("-"); //Splits the id of the button into an array from the "-". I.E. [0]-[1]
    //console.log(restaurantEntryNum[1]); Gets the button number
    const restaurantFavorite = document.querySelector(`#restaurant-${restaurantEntryNum[1]}`).innerText //Grabs the inner text of the element queried matching the button number
    document.querySelector("#restaurant-Fav").innerText = `Restaurant: ${restaurantFavorite}` // Displays text
}

const restaurantSearchEvent = (event) => { //Button Click Event
    let numberID = document.querySelector("#restaurant").value; //Gets Dropdown value
    let restaurantData = Object.create(restaurantAPI); //Creates an object of the restaurant 
    restaurantData.fetchRestaurants(numberID) //Passes the parsed data into the object
        .then(data => restaurantData.fillArticle(data))
}

const restaurantSearchButton = document.querySelector("#submitRestaurants"); //Calls the button that submits
restaurantSearchButton.addEventListener("click", restaurantSearchEvent); //Adds an event listener

//-------------------------------------------------