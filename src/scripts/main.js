<<<<<<< HEAD
// objectData = {
//     function => {
//         fetchData
//     }
// }

// Results: detect DataCue.js object ObjectListener
// results.jsObject = {
//     function(dataFunction)
//     for (data lenght)
//     results = AudioListener.listData[i]
// }
=======
const restaurantData = Object.create(restaurantAPI);
const resultLister = Object.create(resultPasser);

restaurantData.fetchRestaurants()
.then(parsedData => resultLister.fillArticle(parsedData))
>>>>>>> master
