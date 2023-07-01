var http = require('http');
http.createServer(function (req,res) {
 res.write("Imakivr");
 res.end();
}).listen(8080);