const needle = require("needle");

const breedQuery = process.argv[2];


needle("get", `https://api.thecatapi.com/v1/breeds/search?q=${breedQuery}`)
  .then(response => {

    if (response.body.length === 0) throw new Error("Breed not found");
    console.log(response.body[0].description);

  })
  .catch(err => {

    console.log(err);
    
  });
