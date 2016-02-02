/**
 * 파일 삭제
 * 아래 코드는 unlink() 비동기 fs 호출을 사용해 new.txt 파일을 삭제하는 내용이다.
 */

var fs = require('fs');

fs.unlink("new.txt", function(err) {
	
	console.log(err ? "File Delete Failed" : "File Deleted");
	
});