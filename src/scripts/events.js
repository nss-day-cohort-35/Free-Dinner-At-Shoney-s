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
                console.table("this is a list", parsedDate.events)

                let localList = [];
                for (i = 0; i < parsedDate.events.length; i++) {
                    localList.push(parsedDate.events[i].start.local)
                    console.log("local list", localList[i])
                }

                return localList
            })
    }
}






function addResults(array) {
    let tableValue = document.querySelector("#search_events").value
    for (let i = 0; Object.keys(array).length; i++) {
        if (tableValue === array.start.local) {

        }

    }
}



function eventsHTML(item) {
    return ` <li>
<h3><span>${item.events.name}</span><button class="save-button">Save</button></h3>
<p>Start: ${item.events.start.local}</p>
</li>`
}

const saveEvents = document.getElementById("result")

document.querySelector("#result")

API.askForApi().then(localList => {

    console.log(localList)

    for (i = 0; i < localList.length; i++) {
        let resize = localList[i].slice(0,9);
        return resize;

    }
    console.log("resize it", resize)


})