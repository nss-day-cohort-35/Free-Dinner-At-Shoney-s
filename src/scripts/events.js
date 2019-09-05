console.log("this is working")



const API = {
    askForApi() {
        return fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
            "headers": {
                "Accept": "application/json"
            }
        })
            .then(Response => Response.json())
            .then(parsedDate => {


                let localList = [];
                for (i = 0; i < parsedDate.events.length; i++) {
                    localList.push(parsedDate.events[i].start.local)

                }

                return localList
            })
    }
}






function noEvents(item) {
return `<h3> There are no events for this day, please try another one </h3>`
}


function eventsHTML(item) {
    return ` <li>
<h3><span>${item.events.name}</span><button class="save-button">Save</button></h3>
<p>Start: ${item.events.start.local}</p>
</li>`
}

const saveEvents = document.getElementById("result")



API.askForApi().then(localList => {

    for (i = 0; i < localList.length; i++) {
        let resizeIt = localList[i].slice(0, 10);

        console.log("resize it", resizeIt)
    }
    document.querySelector("#save_search").addEventListener("click", function addResults(data) {
        let tableValue = document.querySelector("#search_events").value
        for (let i = 0; data.length; i++) {
            if (tableValue === data[i]) {
              saveEvents.innerHTML += eventsHTML
            } else {
                saveEvents.innerHTML += noEvents
            }

        }
    })
})

