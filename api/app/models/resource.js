/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Resource Schema
 */
 
var ResourceSchema = new Schema({
	id: Number,
	resources:[{
        title: String,
        link: String
	}]
});

/**
 * Statics
 */
ResourceSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            id: id
        }).exec(cb);
    }
};

mongoose.model('Resource', ResourceSchema);