const request = require('postman-request');

const url =
  'http://api.weatherstack.com/current?access_key=da8fb35ce2dddb26d2babed624cb3b98&query=37.8267,-122.4223';

request({ url, json: true }, (error, response) => {
  const tempReal = response.body.current.temperature;
  const tempFeel = response.body.current.feelslike;
  const rainChance = response.body.current.
  console.log(`It is currently ${tempReal}, it feels like ${tempFeel}. There is a ${rainChance}% chance of rain.`);
});
