require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
const axios = require('axios');
var fs = require('fs');

var swibor = function (userPick, userChoice) {
    switch (userPick) {
        case "concert-this":
            getConcert(userChoice);
            break;
        case "spotify-this":
            getSpotify(userChoice);
            break;
        case "movie-this":
            getMovie(userChoice);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("Liri doesn't know what to do!");
    }
}

var runSwitch = function (arg1, arg2) {
    swibor(arg1, arg2)
};

runSwitch(process.argv[2], process.argv.slice(3).join(" "));

function getConcert(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

        .then(function (response) {
            console.log(response.data[0].venue.name);
            console.log(response.data[0].venue.city);
            console.log(response.data[0].datetime);
        })
        .catch(function (error) {
            console.log(error);
        });
};

function getSpotify(songChoice) {
    if (songChoice === undefined) {
      songChoice = "The Sign";
    }
    spotify.search(
      {
        type: "track",
        query: songChoice
      },
      function(err, data) {
        if (err) {
          console.log(err);
        }
        console.log(data.tracks);
    })
  };

function getMovie(movie) {
    var movieF = "";
    if (movie === "") {
        movieF = encodeURIComponent("Mr. Nobody")
    } else {
        movieF = encodeURIComponent(movie)
    }
    var apiUrl = "http://www.omdbapi.com/?t=" + movieF + "&y=&plot=full&tomatoes=true&apikey=trilogy";
    axios.get(apiUrl)
        .then(function (response) {
            console.log(response.data.Title)
            console.log(response.data.Year)
            console.log("The movie's rating is: " + response.data.imdbRating);
            console.log(response.data.Ratings[1])
            console.log(response.data.Country)
            console.log(response.data.Language)
            console.log(response.data.Plot)
            console.log(response.data.Actors)
        });
};

function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (error, data) {
        var dataArr = data.split(",");
        if (dataArr.length === 2) {
            swibor(dataArr[0], dataArr[1]);
        } else if (dataArr.length === 1) {
            swibor(dataArr[0]);
        } else {
            console.log("you broke it");
        }
    });
};

