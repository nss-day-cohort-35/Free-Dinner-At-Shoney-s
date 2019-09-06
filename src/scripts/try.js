

fetch("https://www.eventbriteapi.com/v3/events/search/?q=senior&location.address=nashville&token=FZEHRXINGLKISD4D62G7", {
    "headers": {
        "Accept": "application/json"
    }
})
    .then(Response => Response.json())
    .then(parsedDate => {

        let localListName = [];

        for (i = 0; i < parsedDate.events.length; i++) {
            localListName.push(parsedDate.events[i].name.text)
            console.log("list of name", localListName)
        }

        let localListDate = [];
        for (i = 0; i < parsedDate.events.length; i++) {
            localListDate.push(parsedDate.events[i].start.local)

        }
        console.log("local list", localListDate)
        let resizeIt = []
        for (let i = 0; i < localListDate.length; i++) {

            let y = localListDate[i].slice(0, 10)
            resizeIt.push(y)
            console.log(resizeIt)
        }



        console.table(parsedDate)
        printDomFunction(parsedDate)
    })


function eventsHTML(item) {
    return ` <li>
    <h3><span>${item.events[name.text]}</span><button class="save-button">Save</button></h3>
    <p>Start: ${item.events[start.local]}</p>
    </li>`
}

const eventsContainer = document.querySelector(".eventsList")

const printDomFunction = (data) => {
    eventsContainer.innerHTML += eventsHTML(data)
}