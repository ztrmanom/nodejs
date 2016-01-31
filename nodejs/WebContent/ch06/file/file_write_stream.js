/**
 * 스트리밍 파일 쓰기
 * 아래 코드는 기본 Writable 파일 스트림을 구현하는 방법을 보여준다.
 * 쓰기 완료 후에는 번 줄처럼 end() 함수를 사용해 close 이벤트를 발생시킨다.
 */

var fs = require('fs');
var grains = ['wheat', 'rice', 'oats'];
var options = {
		
		encoding: 'utf8',
		flag: 'w'
		
};
var fileWriteStream = fs.createWriteStream('../data/grains.txt', options);

fileWriteStream.on("close", function() {
	
	console.log("File Closed.");
	
});

while(grains.length) {
	
	var data = grains.pop() + " ";
	fileWriteStream.write(data);
	console.log("Wrote: %s", data);
	
}

fileWriteStream.end();