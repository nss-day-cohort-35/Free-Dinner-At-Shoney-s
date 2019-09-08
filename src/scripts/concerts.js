
//fetch(`https://app.ticketmaster.com/discovery/v2/events/?city=Nashville,TN&keyword=concerts&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)
//fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=&city=nashville&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)

const createConcertList = (item, indexNum) => {

    return `
        <div>
            <h2>${item.name}</h2>
            <a target=blank href="${item.url}">Get Tickets!</a>
            <input type = "button" id = "save-${indexNum}" class = "saveButton" value="Save">
        </div>
        `

}

const concertAPI = function () {
    const resultsDOM = document.querySelector(".dom");
    let concertName = document.querySelector("#concerts").value;

    fetch(`https://app.ticketmaster.com/discovery/v2/events/?classificationName=music&keyword=${concertName}&keyword=&city=nashville&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)
        .then(concerts => concerts.json())
        .then(parsedConcerts => {
            if (parsedConcerts._embedded != undefined) {
                for (let i = 0; i < parsedConcerts._embedded.events.length; i++) {
                    document.querySelector(".dom").innerHTML += createConcertList(parsedConcerts._embedded.events[i]);
                }
            }
            else { alert("no events matching this keyword") }


        })
}


const search = document.getElementById("search");

search.addEventListener("click", event => {
    concertAPI()
})

