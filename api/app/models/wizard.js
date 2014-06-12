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