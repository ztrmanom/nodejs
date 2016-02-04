/**
 * TLS 소켓 서버 생성 
 */

var tls = require('tls');
var fs = require('fs');
var msg = "test";
var options = {
		
		host: '127.0.0.1',
		key: fs.readFileSync('ssl/server.key'),
		cert: fs.readFileSync('ssl/server.crt'),
		ca: fs.readFileSync('ssl/client.crt')
			
};

tls.createServer(options, function(s) {
	
	s.write(msg + "\n");
	s.pipe(s);
	
}).listen(8000);