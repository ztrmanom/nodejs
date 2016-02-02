/**
 * 정적 파일 제공(정적 파일을 가져오는 기본 웹 클라이언트)
 * 아래 코드는 서버에 GET 요청을 보내고 파일 내용을 가져오는 기본 HTTP 클라이언트의
 * 구현을 보여준다. 12~18번 줄에서 요청을 위한 옵션을 설정하고
 * 37~41번 줄에서 클라이언트 요청을 초기화하는 것을 확인하자.
 * 
 * 요청이 완료되면 콜백 함수는 on('data') 핸들러를 사용해 서버로부터 받은 응답 내용을 읽고,
 * on('end) 핸들러에서 파일 내용을 콘솔에 출력한다.
 */

var http = require('http');
var options = {
		
		hostname: 'localhost',
		port: '8080',
		path: '/hello.html'
		
};

function handleResponse(response) {
	
	var serverData = '';
	response.on('data', function(chunk) {
		
		serverData += chunk;
		
	});
	
	response.on('end', function() {
		
		console.log(serverData);
		
	});
	
}

http.request(options, function(response) {
	
	handleResponse(response);
	
}).end();