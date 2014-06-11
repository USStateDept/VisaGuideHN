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