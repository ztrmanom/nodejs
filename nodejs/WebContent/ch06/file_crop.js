/**
 * 파일 잘라내기
 * 아래 코드는 new.txt 이름의 파일을 0바이트 크기로 잘라내는 과정을 보여준다.
 */

var fs = require('fs');

fs.truncate("new.txt", function(err) {
	
	console.log(err ? "File Truncate Failed" : "File Truncated");
	
});