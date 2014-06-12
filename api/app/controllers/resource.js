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

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Resources = mongoose.model('Resource'),
    _ = require('underscore');

/**
 * Show Resources
 */
exports.Resources = function(req, res, next, id) {
    Resources.load(id, function(err, result) {
        if (err) return next(err);
        req.Resources = result;
        next();
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.Resources);
};

exports.all = function(req,res){
    Resources.find().exec(function(err, result) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(result);
        }
    });
};