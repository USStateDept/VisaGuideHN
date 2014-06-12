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
    Wizard = mongoose.model('Checklist'),
    _ = require('underscore');

/**
 * Show the checklist
 */
exports.Checklist = function(req, res, next, id) {
    Wizard.load(id, function(err, Wizard) {
        if (err) return next(err);
        req.Wizard = Wizard;
        next();
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
    res.jsonp(req.Wizard);
};

exports.all = function(req,res){
    Wizard.find().exec(function(err, Wizard) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(Wizard);
        }
    });
};