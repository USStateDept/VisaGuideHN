var express = require('express'); 
var app     = express();
var mongoose = require('mongoose');
var async = require('async');
var nodemailer = require('nodemailer');


// create reusable transport method (opens pool of SMTP connections)
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "usembassyvisaguide@gmail.com",
        pass: "s2h4Sdf3$GTDSwad"
    }
});

// setup e-mail data with unicode symbols
exports.sendEmail = function (req,res){
	var htmlContent = "<h1><b>Esto es lo que necesitas para una Visa</b></h1>";
	var tipovisa = "<h3>Tipo de visa:</h3>"  + req.body.visa_type;  
	var pendingListTitle = "<h2>Objetos pendientes</h2>"
	var completeListTitle = "<h2>Objetos listos</h2>";
	
	var pendingList = "";
	for (var i=0;i<req.body.checklist.length;i++)
   	{ 
     	if (req.body.checklist[i].check===false){
       		pendingList =pendingList + "○ " + req.body.checklist[i].title + "<I>"+" (" + req.body.checklist[i].tip + ")" +"</I>" + "<br/>";
    	}
  	}

  	htmlContent = (pendingList.length === 0) ? htmlContent : htmlContent + pendingListTitle + pendingList;
  	
  	var completeList = "";
  	for ( var j=0;j<req.body.checklist.length;j++)
   	{ 
    	if (req.body.checklist[j].check==true){
       		completeList = completeList + "✔ " + req.body.checklist[j].title + "<I>"+" (" + req.body.checklist[j].tip + ")"+"</I>"+ "<br/>"; 
       	}  
  	}
		
  	htmlContent = (completeList.length === 0) ? htmlContent : htmlContent + completeListTitle + completeList;
      
	var mailOptions = {
	    from: "Your Visa Checklist <usembassyvisaguide@gmail.com>", // sender address
	    to: req.body.email, // list of receivers
	    subject: "Lista de pendientes para el tipo de visa: " + req.body.visa_type , // Subject line
	    html: htmlContent
	}

	smtpTransport.sendMail(mailOptions, function(error, response){
	    if(error){
	         res.jsonp(error);
	    }else{
	         res.jsonp(response.message);
	    }
	}); 

};