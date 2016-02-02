/**
 * 동적 GET 서버 구현(http_server_get.js 서버에 GET 요청을 보낼 기본 웹 클라이언트)
 * 아래 코드는 http_server_get.js에서 작성한 서버의 응답을 읽기 위한 기본 HTTP 클라이언트 구현 내용이다.
 * 경로 정보가 지정되지 않은 것에 주목하자. 좀 더 복잡한 서비스를 구현하려면 질의 문자열이나 복잡한 라우팅 경로를
 * 지정해 다양한 요청을 처리한다.
 * 
 * 31번 줄은 statusCode를 콘솔에 출력하고 32번 줄은 headers를 출력한다.
 * 33번 줄은 서버에 저장된 모든 응답 내용을 출력한다. 결과 값은 HTTP 클라이언트의 수행 결과와 함께,
 * 웹 브라우저를 통해 접근한 동적 GET 서버의 응답 결과를 보여준다.
 */

var http = require('http');
var options = {
		
		hostname: 'localhost',
		port: '8080'
		
};

function handleResponse(response) {
	
	var serverData = "";
	response.on('data', function(chunk) {
		
		serverData += chunk;
		
	});
	
	response.on('end', function() {
		
		console.log("Response Status:", response.statusCode);
		console.log("Response Headers:", response.headers);
		console.log(serverData);
		
	});
	
}

http.request(options, function(response) {
	
	handleResponse(response);
	
}).end();