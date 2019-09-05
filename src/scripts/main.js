//Restaurant Button Functions

const restaurantSearchEvent = (event) => { //Button Click Event
    let numberID = document.querySelector("#restaurant").value; //Gets Dropdown value
    let restaurantData = Object.create(restaurantAPI); //Creates an object of the restaurant 
    restaurantData.fetchRestaurants(numberID) //Passes the parsed data into the object
        .then(data => restaurantData.fillArticle(data))
}

const setSaveEventListeners = () =>{
    
}

const restaurantSearchButton = document.querySelector("#submitRestaurants"); //Calls the button that submits
restaurantSearchButton.addEventListener("click", restaurantSearchEvent); //Adds ana event listener

//-------------------------------------------------
