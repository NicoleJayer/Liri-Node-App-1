//using .env to hide keys
require("dotenv").config();

//project vars
var keys = require("./keys.js");
var fs = require("fs");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require("request");
var movieName = process.argv[3];
var liriReturn = process.argv[2];
// var client = new twitter(keys.twitter);
// var twitter = require('twitter');

//switches for various commands
switch (liriReturn) {
    case "my-tweets":
        myTweets();
        break;

    case "spotify-this-song":
        spotifyThisSong();
        break;

    case "movie-this":
        movieThis();
        break;

    case "do-what-it-says":
        doWhatItSays();
        break;

    // instructions for first-time user lurking around on the command line
    default: console.log("\n" + "type any command after 'node liri.js' : " + "\n" +
        "1. my-tweets 'use DangerNoodle18 or your handle' " + "\n" +
        "2. spotify-this-song 'any song title' " + "\n" +
        "3. movie-this 'any movie title' " + "\n" +
        "4. do-what-it-says " + "\n" +
        "Use quotes for multiword titles!");
};

// //command 1 my-tweets
// //errors are either twitter is not defined or twitter is not a constructor
// function myTweets() {
//     var twitterHandle = process.argv[3];
//     var twitterId = { twitterHandle: 'nodejs' };
//     client.get('statuses/user_timeline', twitterId, function (error, tweets, response) {
//         if (!error) {
//             console.log(tweets);
//         };
//     });
// };

//command 2 spotify this song
// need artist, song name, preview, album
function spotifyThisSong(trackName) {
    var trackName = process.argv[3];
    if (!trackName) {
        trackName = "The Sign";
    }
    songRequest = trackName;
    spotify.search({
        type: "track",
        query: songRequest
    },
        function (err, data) {
            if (!err) {
                var trackInfo = data.tracks.items;
                for (var i = 0; i < 5; i++) {
                    if (trackInfo[i] != undefined) {
                        var spotifyResults =
                            "Artist: " + trackInfo[i].artists[0].name + "\n" +
                            "Song: " + trackInfo[i].name + "\n" +
                            "Preview URL: " + trackInfo[i].preview_url + "\n" +
                            "Album: " + trackInfo[i].album.name + "\n"

                        console.log(spotifyResults);
                        console.log(' ');
                    }
                }
            } else {
                console.log("error: " + err);
                return;
            }
        });
};
//command 3 movie this
// run a request to the OMDB API with the movie specified
function movieThis() {

    //using movieName from var list at top
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {

        // If the request is successful
        if (!error && response.statusCode === 200) {

            //verify url
            var queryUrlResults = 
                "Title: " + JSON.parse(body).Title + "\n" +
                "Year: " + JSON.parse(body).Year + "\n" +
                "IMDB Rating: " + JSON.parse(body).Ratings[0].Value  + "\n" +
                "Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\n" +
                "Origin Country: " + JSON.parse(body).Country + "\n" +
                "Language: " + JSON.parse(body).Language + "\n" +
                "Plot: " + JSON.parse(body).Plot + "\n" +
                "Actors: " + JSON.parse(body).Actors + "\n"
        
            console.log(queryUrlResults);
        };
    });
};

//command 4 do-what-it-says
// This block of code creates a file called "random.txt"
// It also adds the spotify command
function doWhatItSays() {
    fs.writeFile("random.txt", 'spotify-this-song,"I Want it That Way"', function (err) {

        // If the code experiences any errors it will log the error to the console.
        if (err) {
            return console.log(err);
        }

        // Otherwise, it will print:
        console.log("Rock out to 'I Want It That Way'!");
    });
};
