/** 
 *  VisaGuideHN
 * 
 *  Copyright (c) 2014 United Stades Department of State
 *
 *  This product includes software developed by
 *  Acklen Avenue (http://acklenavenue.com).
 *
 *  Project Founder: Zennia Hancock Paganini, PhD
 **/

var _ = require('underscore');

// Load app configuration

module.exports = _.extend(
  require(__dirname + '/../config/env/all.js'),
  require(__dirname + '/../config/env/' + process.env.NODE_ENV + '.json') || {}) ;
