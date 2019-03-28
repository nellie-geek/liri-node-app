require("dotenv").config();

var fs = require("fs");
var keys = require("./keys");
var moment = require("moment");
var spotify = require('node-spotify-api');
var spotify = new spotify(keys.spotify);
var action = process.argv[2]
var input = process.argv.slice(3).join("+");
var axios = require("axios");

function switchFunc(command, arg) {
    switch(command) {
        case "concert-this": concertThis(arg);
        break;

        case "spotify-this-song": songThis(arg);
        break;

        case "movie-this": movieThis(arg);
        break;
        
        case "do-what-it-says": doThis();
        break;

        default: 
        return console.log("Not valid request, try again.")
    }
};
switchFunc(action, input);

//movieThis function 
function movieThis(arg) {

    if (!arg) {
        arg = "Mr. Nobody"
    };
        movieName = arg
        var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&apikey=trilogy";

        axios.get(queryURL).then(
            function(response) {
                // console.log(response.data);
                console.log("Movie title: " + response.data.Title);
                console.log("Came out in: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating + " / 10");
                console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
                console.log("Produced in: " + response.data.Country);
                console.log("" + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Starring: " + response.data.Actors);
        })

};

function concertThis(arg) {
    
    if (arg) {
    var artist = arg

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response) {

        var response = response.data[0];
        console.log(response.venue.name);
        console.log(response.venue.city);
        console.log(moment(response.datetime).format("MM/DD/YYYY"));
    
        })
    } else {
        console.log("ERROR - Please enter an artist so we can search.");
    }
};

function songThis(arg) {
    if (!arg) {
        arg = "Ace of Base"
    };
    spotify.search({ type: 'track', query: arg, limit: 1 }, function (error, data) {
        if (error) {
            return console.log('Error occurred: ' + error);
        }

        var data = data.tracks.items[0];
        console.log("Artist Name: " + data.artists[0].name);
        console.log("Song Name: " + data.name);
        console.log("Preview: " + data.preview_url);
        console.log("Album: " + data.album.name);

    });
}

function doThis() {
    fs.readFile("random.txt", "utf8", function(error, data) {
        if(error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        switchFunc(dataArr[0], dataArr[1])
    })
};