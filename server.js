'use strict';

var fs = require('fs');
var request = require('request');
var _ = require('lodash');

var config = require('./config')
var uber_data = require('./uber.json');

var options = {
  url: 'https://api.uber.com/v1/estimates/price?start_latitude=' + config.latitude + '&start_longitude=' + config.longitude + '&end_latitude=' + config.latitude + '&end_longitude=' + config.longitude,
  headers: {
    'User-Agent': 'request',
    'Content-Type': 'application/json',
    'Authorization': config.api_key
  }
};

console.log(options.url);


function callback(error, response, body) {
  if (!error && response.statusCode === 200) {
    var info = JSON.parse(body);

    _(info.prices).forEach(function(value) {
      var data = {};
      data.vehicle = value.localized_display_name;
      data.surge = value.surge_multiplier;
      data.date = new Date();

      uber_data.push(data);

      fs.writeFile('uber.json', JSON.stringify(uber_data, null, 4), function(err) {
        if (err) {
          console.log('There was an error writing the data');
        } else {
          console.log('Uber Surge Rates for ' + data.vehicle + ' were Posted to the JSON File!');
        }
      });

    });
  }
}

request(options, callback);
