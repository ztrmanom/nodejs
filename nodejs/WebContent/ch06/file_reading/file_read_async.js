/**
 * 비동기적 파일 읽기
 * 아래 코드는 파일에서 비동기 방식으로 데이터 청크를 읽는 기본 함수를 보여준다.
 * 35~39번 줄의 open() 콜백이 readFruit() 함수를 호출하는 것과 파일 디스크립터가
 * 전달된 것을 확인하자. 16~29줄의 read() 콜백도 readFruit()를 호출하고
 * 파일 디스크립터를 전달하고 있다. 이런 방식을 사용해 비동기적 읽기가
 * 다른 비동기 읽기 요청보다 먼저 실행되는 것을 보장할 수 있다.
 */

var fs = require('fs');

function readFruit(fd, fruits) {

	var buf = new Buffer(5);
	buf.fill();
	fs.read(fd, buf, 0, 5, null, function(err, bytes, data) {
		
		if(bytes > 0) {
			
			console.log("read %dbytes", bytes);
			fruits += data;
			readFruit(fd, fruits);
			
		} else{
			
			fs.close(fd);
			console.log("Fruits: %s", fruits);
			
		}
		
	});
	
}

fs.open('../data/fruit.txt', 'r', function(err, fd) {

	readFruit(fd, "");
	
});