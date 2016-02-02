/**
 * 간편한 파일 쓰기
 * 아래 코드는 간편한 비동기 fileWrite() 함수를 사용해
 * config 객체의 JSON 문자열 내용을 파일에 저장하는 내용을 보여준다.
 */

var fs = require('fs');
var config = {
		
		maxFiles: 20,
		maxConnections: 15,
		rootPath: "/webroot"
		
};

var configTxt = JSON.stringify(config);
var options = {
		
		encoding: 'utf8',
		flag: 'w'
		
};

fs.writeFile('../data/config.txt', configTxt, options, function(err) {
	
	if(err) {
		
		console.log("Config Write Failed.");
		
	} else {
		
		console.log("Config Saved.");
		
	}
	
});