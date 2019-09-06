
const search = document.getElementById("search");

search.addEventListener("click", () => {
    dom.innerHTML = event.target.value
    console.log("listening");
})


fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=&city=nashville&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)
    .then(concerts => concerts.json())
    .then(parsedConcerts => {

        for (let i = 0; i < 19; i++) {
            document.querySelector(".dom").innerHTML += createConcertList(parsedConcerts._embedded.events[i]);
            console.log(parsedConcerts._embedded.events[i])
            //console.table(parsedConcerts);
        }

    })

  

const createConcertList = (item) => {
    return `
        <div>
            <h2>${item.name}</h2>
            <a href="${item.url}">Get Tickets!</a>
        </div>
        `
}






