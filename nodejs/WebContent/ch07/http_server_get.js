/**
 * 동적 GET 서버 구현(기본 GET 웹서버 구현)
 * 아래 코드는 간단한 HTTP 파일을 동적으로 생성해 응답하는 기본적 형태의
 * 동적 웹 서버의 구현 내용을 보여준다. 이 예제는 헤더를 보내고 응답을 작성 후 연속적인
 * write() 요청을 통해 데이터를 전송한다.
 * 
 * 25번 줄에서 createServer()를 사용해 서버를 생성하고, 40번 줄에서 8080 포트를 수신한다.
 * 26~40번 줄의 요청 이벤트 핸들러에서는 Content-Type 헤더를 설정하고 응답 코드 200과 함께
 * 헤더를 보낸다. 현실 세계에서는 데이터를 준비하기 위한 많은 과정이 필요하지만,
 * 이 예제에서 사용하는 데이터는 17~23번 줄에 있는 messages 배열을 사용한다.
 * 
 * 32~36번 줄의 반복 구문을 유심히 보자. 매 반복 구문 수행마다 message와 write() 호출을 통해
 * 클라이언트에 보낼 응답 스트림 한다. 38번 줄에서 end() 함수를 호출해 응답을 마무리한다.
 */

var http = require('http');
var messages = [
                
                'Hello World',
                'From a basic Node.js server',
                'Take Luck'
                
                ];

http.createServer(function (request, response) {
	
	response.setHeader("Content-Type", "text/html");
	response.writeHead(200);
	response.write("<html><head><title>Simple HTTP Server</title></head>");
	response.write("<body>");
	
	for(var idx in messages) {
	
		response.write("\n<h1>" + messages[idx] + "</h1>");
		
	}
	
	response.end("\n</body></html>");
	
}).listen(8080);