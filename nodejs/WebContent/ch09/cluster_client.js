/**
 * HTTP 클러스터 구현(서버에 체스를 위한 연속된 요청을 전송할 HTTP 클라이언트)
 * 아래 코드는 cluster_worker.js에서 생성된 서버를 테스트하기 위해 연속된 요청을 보내는
 * 간단한 HTTP 클라이언트를 구현한다.
 */

var http = require('http');
var options = {port: '8080'};

function sendRequest() {
	
	http.request(options, function(response) {
		
		var serverData = '';
		response.on('data', function(chunk) {
			
			serverData += chunk;
			
		});
		
		response.on('end', function() {
			
			console.log(serverData);
			
		});
		
	}).end();
	
}

for(var i = 0; i < 5; i++) {
	
	console.log("Sending Request");
	sendRequest();
	
}