/**
 * POST 서버 구현(HTTP POST 요청을 처리하는 기본 HTTP 서버 구현)
 * 아래 코드는 POST 요청을 처리하는 동적 웹 서비스의 기본 구현 모습이다.
 * 이 예제의 경우 웹 서비스가 클라이언트에서 name과 occupation 속성을 가진
 * JSON 문자열을 받는다. 17~21번 줄에 나오는 코드는 요청 스트림에서 데이터를 읽은 후
 * 23~34번 줄의 이벤트 핸들러에서 데이터를 객체로 변환하고 message와 question 속성을
 * 가진 새로운 객체를 만든다. 34~38번 줄에서 JSON 스트링 형태의 응답이 객체로 변환돼
 * 콘솔 상에 표시된다.
 */

var http = require('http');

http.createServer(function (request, response) {
	
	var jsonData = "";
	
	request.on('data', function(chunk) {
		
		jsonData += chunk;
		
	});
	
	request.on('end', function() {
		
		var requestObj = JSON.parse(jsonData);
		var responseObj = {
			
				message: "Hello " + requestObj.name,
				question: "Are you a good " + requestObj.occupation + "?"
				
		};
		
		response.writeHead(200);
		response.end(JSON.stringify(responseObj));
		
	});
	
}).listen(8080);

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
