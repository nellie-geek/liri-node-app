# liri-node-app
HW-10 Node.js

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.
LIRI will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. Utilizing 
  * Axios, 
   * for OMDB API and the Bands In Town API
  * Moment
  * DotEnv(.env)
  
Note: associated keys are not inldued so you will need to creat your own file and include all necessary API keys

**Application**

Liri can take in one of the following four commands: 
    ~ concert-this
    ~ spotify-this-song
    ~ movie-this
    ~ do-what-it-says
Each command will need to include the call to node, file name, appropriate command (from list appove) and an argument if applicable. IF you are searching a specific artist, song or movie be sure to include those as the argument. 
Ex - node liri.js concert-this <artist/band name here>

**[Demo](https://drive.google.com/file/d/1VJHQ3Z6VIfjJ82s54wb5RKmsNBhYrFhe/view?usp=sharing)**

**[GitHub Repo](https://github.com/nellie-geek/liri-node-app)** 
