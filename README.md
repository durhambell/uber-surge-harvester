# Uber Surge Harvester
Little node app that harvests uber surge rates for a given location and stores them in a local json file. Make sure to read the Uber API Terms of Service before using this. This was built for fun should only be used for educational purposes and to learn how to use the Uber API.

#Dependencies
1. Node.js
2. NPM

#Installation
1. Download, clone, or fork the code.
2. `cd` into the directory.
3. Run `npm install` to install all of the required Node Modules.
4. Rename `example-config.js` to `config.js`.
5. In the `config.js` file, replace `<LATITUDE GOES HERE>` and `<LONGITUDE GOES HERE>` with your location's lattitude and longitude coordinate. See the commented code at the bottom of the `config.js` file for an example.
6. In the `config.js` file, add you UBER API Key. You will need to sign up for an Uber Developer Account and create an Uber App in the [Uber Developer Portal](https://developer.uber.com/dashboard).

#Running the App
1. To start the harvester just run `npm start` from the root directory.
2. Check the `uber.json` file for the current Uber Surge Prices in your area. Right now the harvester is set to run manually so it will only harvest once every time you run the app. Check back later to see how to automate this...

#Enjoy!



