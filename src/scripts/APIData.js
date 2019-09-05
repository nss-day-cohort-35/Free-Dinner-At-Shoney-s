console.log("this is working")



fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
    "headers": {
        "Accept": "application/json"
    }
})
    .then(Response => Response.json())
    .then(parsedDate => {
        console.table(parsedDate.events)

    })






function addResults(array) {
    let tableValue = document.querySelector("#search_events").value
    for (let i = 0; Object.keys(array).length; i++) {
        if (tableValue === array.start.local) {

        }

    }
}

console.log(addResults)

function eventsHTML(item) {
    return ` <li>
<h3><span>${item.events.name}</span><button class="save-button">Save</button></h3>
<p>Start: ${item.events.start.local}</p>
</li>`
}

const saveEvents = document.getElementById("result")

document.querySelector("#result")