/**
 * 파일 변경 내역 관찰
 * 아래 코드는 log.txt라는 이름의 파일을 5초 단위로 모니터링하고
 * Stats 객체를 사용해 파일이 변경된 현재와 이전 시간을 출력한다.
 */

var fs = require('fs');

fs.watchFile('log.txt', {

	persistent: true,
	interval: 5000

}, function(curr, prev) {

	console.log("log.txt modified at: " + curr.mtime);
	console.log("Previous modifications was: " + prev.mtime);

});