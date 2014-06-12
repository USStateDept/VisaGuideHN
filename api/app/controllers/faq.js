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
var mongoose = require('mongoose'),
    async = require('async'),
    Faq = mongoose.model('Faq'),
    _ = require('underscore');

/**
 * Show Faq
 */
exports.Faq = function(req, res, next, id) {
    Faq.load(id, function(err, result) {
        if (err) return next(err);
        req.Faq = result;
        next();
    });
};

/**
 * Show an Faq
 */
exports.show = function(req, res) {
    res.jsonp(req.Faq);
};

exports.all = function(req,res){
    Faq.find().exec(function(err, result) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(result);
        }
    });
};