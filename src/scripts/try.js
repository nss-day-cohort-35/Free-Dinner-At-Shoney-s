

fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
    "headers": {
        "Accept": "application/json"
    }
})
    .then(Response => Response.json())
    .then(parsedDate => {

        
        console.table(parsedDate)
        printDomFunction(parsedDate)
    })


function eventsHTML(item) {
    return ` <li>
    <h3><span>${item.events.name.text}</span><button class="save-button">Save</button></h3>
    <p>Start: ${item.events.start.local}</p>
    </li>`
}

const eventsContainer = document.querySelector(".eventsList")

const printDomFunction = (data) => {
    eventsContainer.innerHTML += eventsHTML(data)
}