const request = require('postman-request');

const weatherURL =
  'http://api.weatherstack.com/current?access_key=da8fb35ce2dddb26d2babed624cb3b98&query=37.8267,-122.4223&units=f';

const mapboxURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY29hc3Q5MiIsImEiOiJja3l4bHA0d3EwamthMm50N3FmdnZpdGt6In0.x_QBhqLB0YK11-ShusjzxA&limit=1';

// request({ url: weatherURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Could not connect to Weatherstack');
//   } else if (response.body.error) {
//     console.log('Unable to find location.');
//   } else {
//     const tempReal = response.body.current.temperature;
//     const tempFeel = response.body.current.feelslike;
//     const rainChance = response.body.current.precip;
//     const weatherDescription = response.body.current.weather_descriptions[0];
//     console.log(
//       `${weatherDescription}. It is currently ${tempReal}, it feels like ${tempFeel}. There is a ${rainChance}% chance of rain.`
//     );
//   }
// });

// request({ url: mapboxURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Could not connect to Mapbox API');
//   } else if (response.body.features.length === 0) {
//     console.log('Could not find a match for your location.');
//   } else {
//     const lat = response.body.features[0].center[1];
//     const lon = response.body.features[0].center[0];
//     console.log(lat, lon);
//   }
// });

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiY29hc3Q5MiIsImEiOiJja3l4bHA0d3EwamthMm50N3FmdnZpdGt6In0.x_QBhqLB0YK11-ShusjzxA&limit=1';

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      console.log('Could not connect to Mapbox API');
    } else if (response.body.features.length === 0) {
      console.log('Could not find a match for your location.');
    } else {
      const lat = response.body.features[0].center[1];
      const lon = response.body.features[0].center[0];
      console.log(lat, lon);
    }
  });
};

geocode('Philadelphia', (error, data) => {});
