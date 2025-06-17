const {fetchBreedDescription} = require("./breedFetcher");

const breedQuery = process.argv[2];

fetchBreedDescription(breedQuery, (err, desc) => {
  if (err) console.log(err);
  else console.log(desc);
});
