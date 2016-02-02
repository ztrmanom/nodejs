/**
 * 간단한 파일 읽기
 * 아래 코드는 간단한 비동기 함수 readFile()를 통해 설정 파일에서 JSON 문자열을
 * 읽어 들인 후 설정 객체를 생성하는 내용이다.
 */

var fs = require('fs');
var options = {
		
		encoding: 'utf8',
		flag: 'r'
		
};

fs.readFile('../data/config.txt', options, function(err, data) {
	
	if(err) {
		
		console.log("Failed to open Config File.");
		
	} else{
		
		console.log("Config Loaded.");
		var config = JSON.parse(data);
		console.log("Max Files: " + config.maxFiles);
		console.log("Max Connections: " + config.maxConnections);
		console.log("Root Path : " + config.rootPath);
		
	}
	
});