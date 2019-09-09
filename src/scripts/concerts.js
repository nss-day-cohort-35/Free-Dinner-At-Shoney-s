
//fetch(`https://app.ticketmaster.com/discovery/v2/events/?city=Nashville,TN&keyword=concerts&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)
//fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=&city=nashville&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)

const createConcertList = (item, indexNum) => {

    return `
        <div>
            <h2 id="concertFav-${indexNum}">${item.name}</h2> 
            <a target=blank href="${item.url}">Get Tickets!</a>
            <input type="button" id="save-${indexNum}" class="saveButton" value="Save">
        </div>
        `

}
// h2 id of concertFav with indexNum is connected to the input of id save indexNum. This way when the concertFav index is called it correlates with the save indexNum.


const concertAPI = function () {
    const resultsDOM = document.querySelector(".dom");
    document.querySelector(".dom").innerHTML=" "
    let concertName = document.querySelector("#concerts").value;

    fetch(`https://app.ticketmaster.com/discovery/v2/events/?classificationName=music&keyword=${concertName}&keyword=&city=nashville&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)
        .then(concerts => concerts.json())
        .then(parsedConcerts => {
           
            if (parsedConcerts._embedded != undefined) {
                for (let i = 0; i < parsedConcerts._embedded.events.length; i++) {
                    document.querySelector(".dom").innerHTML += createConcertList(parsedConcerts._embedded.events[i], i); // pulling the first one in the array [i] and the index i. 
                }
            }
            else { alert("no events matching this keyword") }


        })
        .then(res => concertEvent()) // show the results of concertEvent 
}


const search = document.getElementById("search");

search.addEventListener("click", event => {
    concertAPI() 
})

const concertSaveEvent = (event) => {
    const concertIndexNum = event.target.id.split("-"); // splits the array from the index in a list. 
    const concertFav = document.querySelector(`#concertFav-${concertIndexNum[1]}`).innerText // pulls concertIndexNum and takes the 2nd object([1]) in the array- in this case the name of concert.
    document.querySelector("#concertFav").innerText = `Concert: ${concertFav}` // taking the name of the concert and making sure that only one concert name is listed at a time. We have `Concert: listed b/c the p name is concert- this just ensures that the way the name is listed the same way we want it listed as we have on the index.html file. 
}

const concertEvent = () => {
    const saveButton = document.querySelectorAll(".saveButton")
    for (let i = 0; i < saveButton.length; i++) {
        saveButton[i].addEventListener("click", event => {
            concertSaveEvent(event)
        })
    }
}

