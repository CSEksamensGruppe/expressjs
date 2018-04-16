var express = require('express');
var app = express();

app.get('/', function(reqeust, response) {
     response.send('<h1>Roux acadamy Meetups<h1>');
});

var myServer = app.listen(3000, function() {
    console.log('listening on port 3000');
});


// var http = require('http'); 

// var myServer = http.createServer(function(request,
//      response){
//         response.writeHead(200, {"Content-Type" : "text/html"})
//         response.write('<h1>Roux meetups<h1>');
//         response.end();
//      });

//      myServer.listen(3000);
//      console.log('Go to Http://localhost:3000 on your browser')

