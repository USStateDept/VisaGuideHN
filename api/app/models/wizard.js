
 /* Module dependencies.
 *
 *instanciara a answer*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


 /**
 * Wizard Schema
 */
    
var WizardSchema = new Schema({
      id : Number,
      questions:[
          {
              id: Number,
              title: String,
              tip: String,
              answers:[
                  {
                      id : Number,
                      title : String,
                      tip : String,
                      antitip : String,
                      next_question : Number,
                      checklist_id : Number,
                      checklist:{
                        title: String,
                        tip : String,
                        check: Boolean
                      },
                      visa_type: String
                  }
              ]
          }
      ]
});

/**
 * Statics
 */
WizardSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            id : id
        }).exec(cb);
    }
};

mongoose.model('Wizard', WizardSchema);