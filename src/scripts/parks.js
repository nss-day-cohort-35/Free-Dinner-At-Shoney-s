fetch("https://data.nashville.gov/resource/74d7-b74t.json")
   .then(parks => parks.json())
   .then(parsedParks => {
    
    for(i = 0; i < 10; i++){
        let list = parsedParks[i].park_name;
    
    console.table(list)
   }})



