

function domHtml(data) {  // this function will create the html section to add in the DOM
    return `<h4 id="${data.id}">${data.name.text} </h4>  
    <p>${data.description.text}</p>
    <a href="${data.url}">See Info</a>
    <input type = "button" class="saveButton" id="meetups-${data.id}" value="Save">`
}


function saveHtml(data) {  // this function will create the html section to add in the DOM when you save your results
    return `<h4>${data.name.text}</h4>`
}



function meetups(value) {  // fetching the API with the argument of value chose by us
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${value}&location.address=nashville&token=FZEHRXINGLKISD4D62G7`)
        .then(result => result.json())
        .then(parsedResult => {   // then for each events 
            parsedResult.events.forEach(element => {
                document.querySelector(".dom").innerHTML += domHtml(element); //add them the HTML inside the .dom section
            });

        });
}

document.querySelector("#search-meetUps").addEventListener("click", event => {  //button event 
    let searchTerm = document.querySelector("#fm-search-bar").value  // save the value of the research
    meetups(searchTerm)  //invoke the fetch function with the argument of the value of the research
});


document.querySelector(".dom").addEventListener("click", event => {  // button event
    if(event.target.id.includes("meetups")){   //I am using a new function called .includes, it says target any id with the word meetups inside the id
        let idMeets = event.target.id.split("-")[1];  // splitting the targeted event in an array and asking only for index 1
        let h3MeetUps = document.getElementById(idMeets);  // define a variable queryng for the new element (idMeets) 
        let meetUpsStorage = document.getElementById("meetups-Fav");  // this variable define where to store the new results 
        meetUpsStorage.appendChild(h3MeetUps)  // appending the variable in the DOM
    }

})

