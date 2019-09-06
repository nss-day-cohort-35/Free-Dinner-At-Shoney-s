console.log("this is working")

var resizeIt = [];
var localListName = [];



const API = {
    askForApi() {
        return fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
            "headers": {
                "Accept": "application/json"
            }
        })
            .then(Response => Response.json())
            .then(parsedDate => {



                for (i = 0; i < parsedDate.events.length; i++) {
                    localListName.push(parsedDate.events[i].name.text)
                    console.log("list of name", localListName)
                }

                let localListDate = [];
                for (i = 0; i < parsedDate.events.length; i++) {
                    localListDate.push(parsedDate.events[i].start.local)

                }
                console.log("local list", localListDate)

                for (let i = 0; i < localListDate.length; i++) {

                    let y = localListDate[i].slice(0, 10)
                    resizeIt.push(y)
                    console.log(resizeIt)
                }




            })
    }
}

console.log(localListName[0])



API.askForApi().then(localList => {
    function noEvents() {
        return `<h3> There are no events for this day, please try another one </h3>`
    }


    function eventsHTML(item) {
        return ` <li>
    <h3><span>${item.events.name.text}</span><button class="save-button">Save</button></h3>
    <p>Start: ${item.events.start.local}</p>
    </li>`
    }

    const saveEvents = document.getElementById("result")






    const buttonPress = document.querySelector("#save_search").addEventListener("click", function addResults() {

        let tableValue = document.querySelector("#search_events").value
        for (i = 0; i < resizeIt.length; i++) {
            if (tableValue === resizeIt[i] && tableValue != undefined) {
                saveEvents.innerHTML += eventsHTML(localListName[i])
            } else if (tableValue === "") {
                saveEvents.innerText += noEvents(API.askForApi)
            }
        }


    })

})

