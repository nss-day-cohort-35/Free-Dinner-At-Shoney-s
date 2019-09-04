const lister = Object.create(listEntry);

const resultPasser = {

    fillArticle: function(parsedData) {
        const resultsDOM = document.querySelector("#results");
        while (resultsDOM.firstChild) {
            resultsDOM.removeChild(resultsDOM.firstChild);
          }
        for(let i = 0; i < Object.keys(parsedData.restaurants).length; i++){
            resultsDOM.innerHTML += lister.fillEntry(parsedData.restaurants[i]);
        }
    }
}