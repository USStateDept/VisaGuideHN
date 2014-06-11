var async = require('async');

module.exports = function(app) {
   
    var wizard = require('../app/controllers/wizard');
    app.param('wizardId', wizard.Wizard);
    app.get('/wizard/:wizardId',wizard.show);
    app.get('/wizards',wizard.all);

    var checklist = require ('../app/controllers/checklist');
    app.param('checklistId', checklist.Checklist);
    app.get('/checklist/:checklistId', checklist.show);
    app.get('/checklists', checklist.all);

    var emailsender = require ('../app/controllers/emailsender');
    app.post('/emailsender', emailsender.sendEmail);

    var resource = require ('../app/controllers/resource');
    app.param('resourceId', resource.Resources);
    app.get('/resources/:resourceId', resource.show);
    app.get('/resources', resource.all);

    var faq = require ('../app/controllers/faq');
    app.param('faqId', faq.Faq);
    app.get('/faq/:faqId', faq.show);
    app.get('/faq', faq.all);

};