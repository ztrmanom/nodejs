/**
 * 정적 파일 제공(기본 정적 파일 웹 서버 구현)
 * 아래 코드는 정적 파일 서버의 기본 구현을 보여준다. 18번 줄에서 createServer()를 사용해
 * 서버를 생성하고, 20~34번 줄에서 요청 이벤트 핸들러를 정의한다.
 * 서버는 Server 객체의 listen() 호출을 통해 8080 포트로 수신한다.
 * 
 * 20번 줄의 요청 이벤트 핸들러를 보면, url.parse() 함수는 url 파싱을 통해
 * 21번 줄처럼 pathname이 필요할 경우 사용할 수 있다.
 * 정적 파일은 fs.readFile()을 사용해 열기와 읽기가 가능하다.
 * readFile() 콜백에서는 파일 내용을 응답 개체에 쓰고 20번 줄에서 response.end(data)를 사용한다.
 */

var fs = require('fs');
var http = require('http');
var url = require('url');
var ROOT_DIR = "./";

http.createServer(function(request, response) {
	
	var urlObj = url.parse(request.url, true, false);
	fs.readFile(ROOT_DIR + urlObj.pathname, function(err, data) {
		
		if(err) {

			response.writeHead(404);
			response.end(JSON.stringify(err));
			return;
			
		}
		
		response.writeHead(200);
		response.end(data);
		
	});
	
}).listen(8080);