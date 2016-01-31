/**
 * 동기적 파일 쓰기
 * 아래 코드는 기본 동기적 쓰기 방식을 사용해
 * 연속된 문자열 데이터를 파일에 저장하는 방법을 보여준다.
 */

var fs = require('fs');
var veggieTray = ['carrots', 'celery', 'olives'];

fd = fs.openSync('../data/veggie.txt', 'w');

while(veggieTray.length) {
	
	veggie = veggieTray.pop() + " ";
	var bytes = fs.writeSync(fd, veggie, null, null);
	console.log("Wrote %s %dbytes", veggie, bytes);
	
}

fs.closeSync(fd);