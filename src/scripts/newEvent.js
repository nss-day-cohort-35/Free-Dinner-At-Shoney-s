const EventsAPI = {
    askForApi() {
        return fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
            "headers": {
                "Accept": "application/json"
            }
        })
            .then(Response => Response.json())
    },
    noEvents: () => {
        return `<h3> There are no events for this day, please try another one </h3>`
    },
    eventsHTML : (item) => {
        return ` <li>
        <h3><span>${item.events.name.text}</span><button class="saveButton">Save</button></h3>
        <p>Start: ${item.events.start.local}</p>
        </li>`
    },
    fillDom : (parsedData) => {
        const resultsDOM = document.querySelector("#results");
        while (resultsDOM.firstChild) { // Clears Results article for new results
            resultsDOM.removeChild(resultsDOM.firstChild);
          }

        for(let i = 0; i < Object.keys(parsedData.events).length; i++){ // For each search result...
            resultsDOM.innerHTML += eventsHTML(parsedData.events[i], i); //Create new DOM elements
        }

        parsedData.applyEvents()
    },
    applyEvents: function() {
        const saveButtonList = document.querySelectorAll("#results .saveButton")
        for(let i = 0; i < saveButtonList.length; i++){
            console.log("assigning" + i);
            saveButtonList[i].addEventListener("click",restaurantSaveEvent)
        }
    }
}

console.log(EventsAPI)