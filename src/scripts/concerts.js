
function lookup (searchTerm){
fetch(`https://app.ticketmaster.com/discovery/v2/events/?keyword=${searchTerm}&city=nashville&apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h`)
    .then(concerts => concerts.json())
    .then(array => {
            array.forEach(parsedConcerts._embedded.events)
            document.querySelector(".dom").innerHTML += createConcertList(_embedded.events[i]);
    console.log(parsedConcerts._embedded.events[i].name) 
               
            }
        })
   
   const concertInfo = document.querySelector("#concertInfo");


   const createConcertList = (item) => {
        return `
        <div>
            <h2>${item.name}</h2>
        </div>
        `
    }
    console.log("HEY");

 lookup("football");


    