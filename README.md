# liri-node-app
HW-10 Node.js


Commands required - concert-this/ spotify-this-song/movie-this/do-what-it-says

node liri.js concert-this <artist/band name here>: Venue Name/Venue location/Event Date

node liri.js spotify-this-song '<song name here>': artist/song name/preview link/album
if no song entered default to the sign by Ace of Base

node liri.js movie-this '<movie name here>': Title/Year out/IMDB rating/rotten tomato rating/country produced/language/plot/actors
If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

It's on Netflix!

node liri.js do-what-it-says

Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.


It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
Edit the text in random.txt to test out the feature for movie-this and concert-this.
