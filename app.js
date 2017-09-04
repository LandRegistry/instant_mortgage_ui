/*eslint-env node*/

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
var express = require('express');

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');

const lookAndFeel = require('@hmcts/look-and-feel');
const onePerPage = require('@hmcts/one-per-page');

// create a new express server
var app = express();
// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

const baseUrl = `${appEnv.url || localhost}:${appEnv.port || 3000}`;

lookAndFeel.configure(app, {
  baseUrl,
  webpack: { entry: [__dirname + '/assets/main.scss'] }
});

onePerPage.journey(app, {
  baseUrl,
  steps: [
    require('./steps/Start.js')
  ],
  session: {
    secret: 'foobarbaz',
    redis: { url: process.env.REDIS_URL },
  }
});


// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function() {
  // print a message when the server starts listening
  console.log("server starting on " + appEnv.url);
});
