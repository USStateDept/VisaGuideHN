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

 var http = require('http'),
    fs = require('fs');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config');

http.createServer(function(req, res) {
    var path = "." + req.url;
    if(path=="./") path = "./index.html";

    function stripQueryStringAndHashFromPath(url) {
        return url.split("?")[0].split("#")[0];
    }

    path = stripQueryStringAndHashFromPath(path);

    fs.readFile(path, function(error, content) {
        if (error) {
            console.log("Requested " + path + " but it couldn't be found.");
            res.writeHead(500);
            res.end();
        } else {
            var contentType = 'text/html';
            if(contains(path,".js")){
                contentType = "text/javascript";
            }
            if(contains(path,".css")){
                contentType = "text/css";
            }
            res.writeHead(200, {
                'Content-Type': contentType
            });
            res.end(content, 'utf-8');
        }
    });

}).listen(config.port);

console.log("Test server listening on port " + config.port + "...");

var contains = function(stringToSearch, containsThis) {
    return (stringToSearch.indexOf(containsThis) != -1);
};