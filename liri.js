require("dotenv").config();

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");

var spotify = new Spotify(keys.spotify);


// 1 ===================================================================


// var artist = userInput 
const axios = require('axios');
// Make a request for a user with a given ID
// console.log(process.argv)
function concertThis(artist) {axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

    .then(function (response) {
        console.log(response.data[0].venue.name);
        console.log(response.data[0].venue.city);
        console.log(response.data[0].datetime);
    })
    .catch(function (error) {
        console.log(error);
    });
};
var arg = process.argv;
var userFuncPick = arg[2];
var command = arg.slice(3).join(" ")

if (userFuncPick === "concert-this") {
    concertThis(command)
}


// 2 ===================================================================
function thisSong() {spotify.get("Spotify")
thisSong(artist)
    .then(function (response) {
        console.log(response.data[0].artistName);
        console.log(response.data[0].songTitle);
        console.log(response.data[0].previewLink);
        console.log(response.data[0].albumName);
    })
    .catch(function (error) {
        console.log(error);
    });
};



// spotify.get(
// //     artist: artistName,
// //     song: title,
// //     PreviewLink: "",
// //     Album: name
// // )


// 3 ===================================================================
function movieThis(movie) {axios.get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
  .then(function(response) {
    
    console.log(response.data.Title)
    console.log(response.data.Year)
    console.log("The movie's rating is: " + response.data.imdbRating);
    console.log(response.data.Ratings[1])
    console.log(response.data.Country)
    console.log(response.data.Language)
    console.log(response.data.Plot)
    console.log(response.data.Actors)  
})
};


// 4 ===================================================================
