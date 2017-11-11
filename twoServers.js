var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request,response){
	response.end("<h1>Huzzah GOOD!</h1> <p> Path hit: " + request.url + "</p>");
}  // goto http://localhost:8080/zounds to see this

function handleRequest2(request,response){
	response.end("<h1>Huzzah BAD!</h1> <p> Path hit: " + request.url + "</p>");
}  // goto http://localhost:8080/zounds to see this

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
	console.log("Server1 is on, Yo!");
});

server2.listen(PORT2, function(){
	console.log("Server2 is on, Yo!");
});