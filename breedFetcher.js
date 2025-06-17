const needle = require("needle");


const fetchBreedDescription = (breedName, callback) => {

  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
    let description;
    if (body.length === 0) {
      err = new Error("Invalid or non-existent breed");
      description = null;
    } else description = body[0].description;
    callback(err, description);
  });
  
};

module.exports = {fetchBreedDescription};