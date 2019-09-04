const restaurantData = Object.create(restaurantAPI);
const resultLister = Object.create(resultPasser);

restaurantData.fetchRestaurants()
.then(parsedData => resultLister.fillArticle(parsedData))