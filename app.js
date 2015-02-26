// Load the http module to create an http server.
var http = require('http');
var async = require('async');
// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  	async.parallel([
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 10000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
	            var timenow = Date.now();
				for(var i = 0; i < 10000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    },
	    function(callback){
			    var timenow = Date.now();
				for(var i = 0; i < 100000000; i++) {
			    	//console.log(i);
				}
				var finishtime = Date.now() - timenow;
	            callback(null, finishtime);
	        
	    }
	],
	// optional callback
	function(err, results){
	    console.log(results);
	    var total = results.reduce(function(previousValue, currentValue, index, array) {
  			return previousValue + currentValue;
		});
		console.log(total);
	    response.writeHead(200, {"Content-Type": "text/plain"});
  		response.end("Node.js counts to 1 billion\nNode.js did it in " + total + "ms");
	});

});

// Listen on port 8000, IP defaults to 127.0.0.1
//server.listen(3000);
server.listen(process.env.VCAP_APP_PORT || 3000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:3000/");