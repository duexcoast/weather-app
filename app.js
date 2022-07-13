const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const commands = process.argv.slice(2);

if (commands.length === 0) {
  return console.log('Please enter a location.');
}
const command = commands.join(' ');

geocode(command, (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) console.log(error);
    console.log(data.location);
    console.log(forecastData);
  });
});
