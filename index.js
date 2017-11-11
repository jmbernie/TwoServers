var http = require("http");

var PORT = 8080;

function handleRequest(request,response){
	response.end("<h1>Huzzah!</h1> <p> Path hit: " + request.url + "</p>");
}  // goto http://localhost:8080/zounds to see this

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server is on, Yo!");
});