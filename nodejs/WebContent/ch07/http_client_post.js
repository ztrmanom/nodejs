/**
 * POST 서버 구현(POST 방식으로 JSON 데이터를 서버에 보내고 JSON 응답을 처리하는 기본 HTTP 클라이언트)
 * 아래 코드는 JSON 데이터를 POST 요청의 일부로 서버에 보내는 HTTP 클라이언트의 기본 구현을 보여준다.
 * 요청은 번 줄에서 시작하고, 번 줄에서는 JSON 문자열이 요청 스트림에 기록되고 번 줄에서는 end() 호출로 요청이 종료된다.
 * 
 * 서버가 응답을 받으면 번 줄의 on('data') 핸들러가 JSON 응답을 읽고 번 줄의 on('end') 핸들러가 응답을 JSON 객체로
 * 변환하고 원시 응답과 메시지, 질문 형태로 출력한다.
 */

var http = require('http');
var options = {
		
		host: '127.0.0.1',
		path: '/',
		port: '8080',
		method: 'POST'
		
};

function readJSONResponse(response) {
	
	var responseData = "";
	response.on('data', function(chunk) {
		
		responseData += chunk;
		
	});
	
	response.on('end', function() {
		
		var dataObj = JSON.parse(responseData);
		console.log("Raw Response: " + responseData);
		console.log("Message: " + dataObj.message);
		console.log("Question: " + dataObj.question);
		
	});
	
}

var request = http.request(options, readJSONResponse);

request.write('{"name":"Bilbo", "occupation":"Burglar"}');
request.end();