/**
 * 동기적 파일 읽기
 * 아래 코드는 파일에서 청크 단위의 문자열 데이터를 읽기 위해
 * 동기적 읽기의 기본 형태를 구현하고 있다.
 */

var fs = require('fs');
fd = fs.openSync('../data/veggie.txt', 'r');

var veggies = "";

do {
	
	var buf = new Buffer(5);
	buf.fill();
	var bytes = fs.readSync(fd, buf, null, 5);
	
	console.log("read %dbytes", bytes);
	veggies += buf.toString();
	
} while(bytes > 0);

fs.closeSync(fd);
console.log("veggies: " + veggies);