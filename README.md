# Liri-Node-App

[Liri-Node-App](https://green64.github.io/Liri-Node-App/)

**Object**

The assignment doesn't have an HTML page, so I've used screen captures below to explain how it works. Liri has 4 commands: 
1. my-tweets uses the Twitter Node Package Manager (NPM) to create a function -- myTweets -- that pulls my specific user name's Tweets from the returned object.
1. spotify-this-song uses the Spotify NPM to create a function -- spotifyThisSong -- to pull specific information from the returned object based on the song the user asks for.
1. movie-this uses the Request NPM  to pull specific data from the OMDB database for the user-specified movie.
1. The do-what-it-says command uses fs.write to write to the random.txt file in my directory. 

***Technology used***
This app uses JavaScript, Node.js and 4 NPM packages: Request, Dotenv, Twitter, and Node-Spotify-API 

Files Used | Their Role in the App
------------ | -------------
node_modules | node modules includes the 4 NPM packages
.env |  an invisible file that stores my Twitter and Spotify keys
.gitignore |  another invisible file that includes a   ```#do not track these files``` to hide ensure .env
keys.js | exports the Spotify and Twitter keys, which are required in liri.js
liri.js | the central file that includes all variables, functions and commands
random.txt | the command do-what-it-says uses ```fs.writeFile``` to write to random.txt


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

:video_camera: [Liri app walkthrough](https://youtu.be/-Xj-XAcZ5H4)

