
const apiEvents =  function() {
fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
    "headers": {
        "Accept": "application/json"
    }
})
    .then(Response => Response.json())
    .then(parsedDate => {

        console.table(parsedDate)
        for (let i = 0; i < parsedDate.events.lenght; i++) {
            console.log(parsedDate.events[i])
            if (parsedDate.events[i].name.text != undefined) {
            document.querySelector("#eventsList").innerHTML += eventsHTML(parsedDate.events[i].name.text);}
            
            
        }
    })

}
function eventsHTML(item) {
    return ` <li>
    <h3><span>${item.events.name.text}</span><button class="save-button">Save</button></h3>
    <p>Start: ${item.events.start.local}</p>
    </li>`
}


const searchEvents = document.querySelector("#save_search")

searchEvents.addEventListener("click", apiEvents)