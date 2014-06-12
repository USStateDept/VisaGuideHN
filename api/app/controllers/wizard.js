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
 * Created by Kmilo on 10/2/13.
 */
/*
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    async = require('async'),
    Wizard = mongoose.model('Wizard'),
    _ = require('underscore');

/*
 * Return wizard 
 */
exports.Wizard = function(req, res, next, id) {
    Wizard.load(id, function(err, result) {
        if (err) return next(err);
        req.Wizard = result;
        next();
    });
};

/*
 * Show a Wizard
 */
exports.show = function(req, res) {
    res.jsonp(req.Wizard);
};

/*
Show all wizards
 */
exports.all = function(req,res){
    Wizard.find().exec(function(err, result) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(result);
        }
    });
};