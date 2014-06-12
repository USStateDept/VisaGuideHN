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
    Schema = mongoose.Schema;

/**
 * Faq Schema
 */
 
var FaqSchema = new Schema({
	id: Number,
	faqs:[{
        title: String,
        answer: String
	}]
});

/**
 * Statics
 */
FaqSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            id: id
        }).exec(cb);
    }
};

mongoose.model('Faq', FaqSchema);