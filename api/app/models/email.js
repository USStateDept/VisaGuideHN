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

// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "usembassyvisaguide@gmail.com",
        pass: "s2h4Sdf3$GTDSwad"
    }
});

// setup e-mail data with unicode symbols
var sendEmail = function (req,res){
var mailOptions = {
    from: "Your Visa Checklist <usembassyvisaguide@gmail.com>", // sender address
    to: req.body.email, // list of receivers
    subject: "Lista de pendientes para el tipo de visa" + req.body.visaType , // Subject line
    //text: "This is what you need for a visa", // plaintext body
    html: "<h1><b>Esto es lo que necesitas para una Visa</b></h1>", // html body
    //checklist req.body.checklist
    html: "<h2>Objetos pendientes</h2>",
    for (var i=0;i<req.body.checklist.length;i++)
   { 

     if (req.body.checklist.check[i]==true){
        text: "○" + req.body.checklist.title[j] +"(" + req.body.checklist.tip[j] + ")",
     }
   }
   html: "<h2>Objetos listos</h2>",
     for (var j=0;j<req.body.checklist.length;j++)
   { 

     if (req.body.checklist.check[j]==!true)
        text:"✔" + req.body.checklist.title[j] +"(" + req.body.checklist.tip[j] + ")",    
   }

}
}

// send mail with defined transport object
smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }

  
    //smtpTransport.close(); // shut down the connection pool, no more messages
});

mongoose.model('Email');