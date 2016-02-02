/**
 * 파일 정보 확인
 * 아래 코드는 fs.stat() 함수를 사용하는 방법과 isFile()과 isDirectory(),
 * isSocket() 호출을 사용해 결과를 JSON 문자열 객체로 출력하는 내용을 보여준다.
 */

var fs = require('fs');
fs.stat('file_stats.js', function(err, stats) {
	
	if(!err) {
		
		console.log("stats: " + JSON.stringify(stats, null, ' '));
		console.log(stats.isFile() ? "Is a File" : "Is not a File");
		console.log(stats.isDirectory() ? "Is a Folder" : "Is not a Folder");
		console.log(stats.isSocket() ? "Is a Socket" : "Is not a Socket");
		
		stats.isDirectory();
		stats.isBlockDevice();
		stats.isCharacterDevice();
//		stats.isSymbolicLink();	//only lstat
		stats.isFIFO();
		stats.isSocket();
		
	}
	
});