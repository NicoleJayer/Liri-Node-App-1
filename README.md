# Liri-Hangman-Game
(https://green64.github.io/Liri-Node-App/)

**Object**

The assignment doesn't have an HTML page, so I've used screen captures below to explain how it works. Liri has 4 commands: 
1. my-tweets uses the Twitter Node Package Manager (NPM) to create a function -- myTweets -- that pulls my specific user name's Tweets from the returned object.
1. spotify-this-song uses the Spotify NPM to create a function -- spotifyThisSong -- to pull specific information from the returned object based on the song the user asks for.
1. movie-this uses the Request NPM  to pull specific data from the OMDB database for the user-specified movie.
1. The do-what-it-says command uses fs.write to


***JavaScript used***

```switch (liriReturn) {
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
    default: console.log("\n" + "type any command after 'node liri.js': " + "\n" +
        "my-tweets" + "\n" +
        "spotify-this-song 'any song title' " + "\n" +
        "movie-this 'any movie title' " + "\n" +
        "do-what-it-says " + "\n" +
        "Use quotes for multiword titles!");
};```
