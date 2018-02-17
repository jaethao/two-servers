// require/import the HTTP module
var http = require("http");

//define a port to listen for incoming requests
var PORTONE = 7000;

var PORTTWO = 7500;
///////////////////////////////////////////////////////////////
//create a generic function to handle request and responses PORTONE
function handleRequestOne(request, response) {

//send the below string to the client when the user visits the PORT url
response.end("Good Job! Keep going!!!: " + request.url);
}
//create a generic function to handle request and responses PORTTWO
function handleRequestTwo(request, response) {

//send the below string to the client when the user visits the PORT url
response.end("Booo BOOOO! GO HOME!!!: " + request.url);
}
////////////////////////////////////////////////////////////////
//use the Node HTTP package to create our Server
//pass the handleRequest function to empower it w/ functionality
var serverOne = http.createServer(handleRequestOne);

//start our server so that it can begin listening to client requests
serverOne.listen(PORTONE, function() {
  console.log("Server listening on: http://localhost:" + PORTONE);
});
///////////////////////////////////////////////////////////////
//use the Node HTTP package to create our Server
//pass the handleRequest function to empower it w/ functionality
var serverTwo = http.createServer(handleRequestTwo);

//start our server so that it can begin listening to client requests
serverTwo.listen(PORTTWO, function() {
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
