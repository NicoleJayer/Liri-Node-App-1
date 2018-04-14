# Liri-Hangman-Game

[Liri-Node-App](https://green64.github.io/Liri-Node-App/)

**Object**

The assignment doesn't have an HTML page, so I've used screen captures below to explain how it works. Liri has 4 commands: 
1. my-tweets uses the Twitter Node Package Manager (NPM) to create a function -- myTweets -- that pulls my specific user name's Tweets from the returned object.
1. spotify-this-song uses the Spotify NPM to create a function -- spotifyThisSong -- to pull specific information from the returned object based on the song the user asks for.
1. movie-this uses the Request NPM  to pull specific data from the OMDB database for the user-specified movie.
1. The do-what-it-says command uses fs.write to write to the random.txt file in my directorty. 

***Technology used***
This app uses JavaScript, Node.js and 4 NPM packages: Request, Dotenv, Twitter, and Node-Spotify-API 


***Code excerpts***

I coded a switch with "cases" and corresponding functions to create the four separate commands:

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
};
```
***Video walkthrough***

Because this is a command-line app, there's not an HTML page where you can watch it in action. In the video below, I walk through the main .js file and demonstrate the app in action. 

:video_camera: ![Video Walkthrough](https://green64.github.io/Liri-Node-App/liri-node-app.mov)
