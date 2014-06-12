/** 
 *  VisaGuideHN
 * 
 *  Copyright (c) 2014 United Stades Department of State
 *
 *  This product includes software developed by
 *  Acklen Avenue (http://acklenavenue.com).
 *
 *  Project Founder: Zennia Hancock, PhD
 **/

/**
 * Module dependencies.
 */
var express = require('express'),
    fs = require('fs');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    mongoose = require('mongoose');

//Bootstrap db connection
var db = mongoose.connect(config.db);

//Bootstrap models
require(__dirname + '/app/models/wizard');
require(__dirname + '/app/models/checklist');
require(__dirname + '/app/models/resource');
require(__dirname + '/app/models/FAQ');



var app = express();

//express settings
require('./config/express')(app);

//Bootstrap routes
require('./config/routes')(app);

//Start the app by listening on <port>
var port = config.port;
app.listen(port);
console.log('Express app started on port ' + port);


//expose app
exports = module.exports = app;