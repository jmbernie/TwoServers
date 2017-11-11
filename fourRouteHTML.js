// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function displayHome(){
			function handleRequest(req, res) {

			  // Here we use the fs package to read our index.html file
			  fs.readFile(__dirname + "/index.html", function(err, data) {

			    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
			    // an html file.
			    res.writeHead(200, { "Content-Type": "text/html" });
			    res.end(data);
			  });
			}
};	

function displayFood(){
			function handleRequest(req, res) {

			  // Here we use the fs package to read our index.html file
			  fs.readFile(__dirname + "/FavoriteFood.html", function(err, data) {

			    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
			    // an html file.
			    res.writeHead(200, { "Content-Type": "text/html" });
			    res.end(data);
			  });
			}
};		

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});


function handleRequest(req, res) {

  // Capture the url the request is made to
  var path = req.url;

  // Depending on the URL, display a different HTML file.
  switch (path) {

    case "/":
     // return displayHome(path, req, res);
      return displayHome();

    case "/FavoriteFood":
     // return displayFood(path, req, res);
      return displayFood();

    default:
    //  return display404(path, req, res);
      return display404();
  }
};