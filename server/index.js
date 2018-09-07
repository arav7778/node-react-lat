var http=require('http');
http.createServer(function(req,res){
	// res.writeHead(200,{'Content-Type':'text/html'});
	// res.end('Hello World2!');
  //res.writeHead(200,{'Content-Type' : 'application/json'});
 // res.send(JSON.stringify({a:1}));
  res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ a: 1 }));
}).listen(5000);
