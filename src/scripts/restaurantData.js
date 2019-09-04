//Zomato Fetching
const restaurantAPI = {

    fetchRestaurants: function(idNum){
        return fetch(`https://developers.zomato.com/api/v2.1/search?cuisines=${idNum}&entity_id=1138&entity_type=city&sort=rating&apikey=13e3621c981ec21f6d5716798b751e36`)
        .then(r => r.json())
    }
}