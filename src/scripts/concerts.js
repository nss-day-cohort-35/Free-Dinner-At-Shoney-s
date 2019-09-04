fetch("https://app.ticketmaster.com/discovery/v1/events.json?apikey=XM43D9BduVA5MvbUW1duD6DHBAOv563h")
    .then(concerts => concerts.json())
    .then(parsedConcerts => {
      
            for (let i = 0; i < 9; i++){
                let tickets = parsedConcerts._embedded.events[i].name;
                 //concertInfo.innerHTML += createConcertList(name[i]); 
                console.log(parsedConcerts._embedded.events[i].name) 
                
            }
        })

   const concertInfo = document.querySelector("#concertInfo");


   const createConcertList = (concert) => {
        return `
        <div>
            <h2>${concert.name}</h2>
            <p>${concert.localDate}</p>
            <p>${concert.localTime}</p>
            <p>${concert.venue}</p>
        </div>
        `
    }
    console.log("HEY");

 