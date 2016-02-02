/**
 * 외부 소스와 하는 상호작용(날씨 정보를 가진 외부 소스에 원격으로 연결하는 HTTP 웹 서비스 구현)
 * 아래 코드는 GET 요청과 POST 요청을 둘 다 지원하는 웹 서비스 구현을 보여준다.
 * GET 요청의 경우 사용자가 도시 이름을 입력할 수 있는 폼 형태의 단순한 웹 페이지를 반환한다.
 * POST 요청의 경우 도시 이름에 접근하고 Node.js 웹 클라이언트 시작 후 openweathermap.org에 원격으로 접속해
 * 도시의 기상 정보를 가져온다. 가져온 기상 정보는 워본 웹 폼과 함께 서버에 반환된다.
 * 
 * 이번 예제와 이전 예제의 가장 큰 차이점은 웹 서버가 로컬 웹 클라이언트 외부 서비스에 연결해 응답을 구성하기 위한
 * 데이터를 가져오는 것에 있다. 번 줄에 웹 서버가 구현돼 있다. POST 방식 요청의 경우 요청 스트림에서 폼 값을 읽고
 * querystring, parse()를 사용해 도시명을 얻고, getWeather() 함수를 호출한다.
 * 
 * 번 줄의 getWeather() 함수는 openweathermap.org의 클라이언트 요청을 구현한다.
 * 라인 번 줄의 parseWeather() 요청 핸들러는 openweathermap.org의 응답을 읽어서 sendResponse() 함수에
 * 데이터를 전달한다. 번 줄에 있는 sendResponse() 함수는 응답을 구성해 클라이언트에 전달한다.
 */

var http = require('http');
var url = require('url');
var qstring = require('querystring');

function sendResponse(weatherData, response) {

	var page = '<html><head><title>External Example</title></head>' +

	'<body>' +
	'<form method="POST">' +
	'City: <input name="city"><br>' +
	'<input type="submit" value="Get Weather">' +
	'</form>';
	
	if(weatherData) {
		
		page += '<h1>Weather Info</h1><p>' + weatherData + '</p>';
		
	}
	
	page += '</body></html>';
	response.end(page);
	
}

function parseWeather(weatherResponse, response) {
	
	var weatherData = "";
	weatherResponse.on('data', function(chunk) {
		
		weatherData += chunk;
		
	});
	
	weatherResponse.on('end', function() {
		
		sendResponse(weatherData, response);
		
	});
	
}

function getWeather(city, response) {
	
	var options = {
			
			host: 'api.openweathermap.org',
			path: '/data/2.5/weather?q=' + city
			
	};
	
	http.request(options, function(weatherResponse) {
		
		parseWeather(weatherResponse, response);
		
	}).end();
	
}

http.createServer(function(request, response) {
	
	console.log(request.method);
	if(request.method == "POST") {
		
		var requestData = "";
		request.on('data', function(chunk) {
			
			requestData += chunk;
			
		});
		
		request.on('end', function() {
			
			var postParams = qstring.parse(requestData);
			getWeather(postParams.city, response);
			
		});
		
	} else{
		
		sendResponse(null, response);
		
	}
	
}).listen(8080);