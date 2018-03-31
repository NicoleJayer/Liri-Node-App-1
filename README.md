# Liri-Node-App
creating _Language_ Interpretation and Recognition Interface

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
