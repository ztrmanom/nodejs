/**
 * HTTP 클러스터 구현(HTTP 서버를 구현하는 worker 프로세스)
 * 아래 코드는 worker HTTP 서버를 구현한다.
 * HTTP 서버는 클라이언트에 응답을 보내고, 16번 줄의 클러스터 마스터에도 메시지를 보낸다.
 */

var cluster = require('cluster');
var http = require('http');

if(cluster.isWorker) {
	
	http.Server(function(request, response) {
		
		response.writeHead(200);
		response.end("Process " + process.pid + " says hello");
		process.send("Process " + process.pid + " handled request");
		
	}).listen(8080, function() {
		
		console.log("Child Server Running on Process: " + process.pid);
		
	});
	
};