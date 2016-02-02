/**
 * 스트리밍 방식 파일 읽기
 * 아래 코드는 기본 Readable 파일 스트림 구현을 나타낸다. 16~21번 줄에서는 스트림에서
 * 지속적으로 데이터를 읽기 위한 data 이벤트 핸들러를 구현한다.
 */

var fs = require('fs');
var options = {
		
		encoding: 'utf8',
		flag: 'r'
		
};
var fileReadStream = fs.createReadStream("../data/grains.txt", options);

fileReadStream.on('data', function(chunk) {
	
	console.log("Grains: %s", chunk);
	console.log("Read %d bytes of data.", chunk.length);
	
});

fileReadStream.on('close', function() {
	
	console.log("File Closed.");
	
});