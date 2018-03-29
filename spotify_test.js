var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: "84e1a75396374dc9af5de9b596783587",
  secret: "95d42d78d16645748538c52f900a0b17"
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});