

function domHtml(data) {
    return `<h3>${data.name.text}<h3>
    <input type = "button" id = "save-${data.name.text}" class = "saveButton" value="Save">`
}


//function results(array) {
  //  array.forEach(data => {
    //    document.querySelector(".dom").innerHTML += domHtml(data);
   // });
// }

function meetups(value) {
    fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${value}&location.address=nashville&token=FZEHRXINGLKISD4D62G7`)
        .then(result => result.json())
        .then(parsedResult => {
            parsedResult.events.forEach(element => {
                document.querySelector(".dom").innerHTML += domHtml(element);
            });

        });
}

document.querySelector("#search-meetUps").addEventListener("click", event => {
    let searchTerm = document.querySelector("#fm-search-bar").value
    meetups(searchTerm)
});

