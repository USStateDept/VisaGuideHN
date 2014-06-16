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
    Schema = mongoose.Schema;


function toLower (v) {
    return v.toLowerCase();
}

/**
 * Checklist Schema
 */
 
var ChecklistSchema = new Schema({
    id: Number,
    visaType : String, 
    items :[{
        title_id : Number,
        title: String,
        tip: String,
        check: Boolean
    }]
    
    
});

/**
 * Statics
 */
ChecklistSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            id: id
        }).exec(cb);
    }
};

mongoose.model('Checklist', ChecklistSchema);