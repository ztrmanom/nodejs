/**
 * 비동기적 파일 쓰기
 * 아래 코드는 파일에 문자열 배열을 비동기적으로 저장하기 위한 기본 코드를 보여준다.
 * 41~45번 줄에서 open()은 파일 디스크립터를 콜백 함수 전달인자로 지정하고,
 * 콜백 함수 내에서 writeFruit() 함수를 사용한다. 18~31번 줄의 write() 콜백은 파일 디스크립터를
 * 전달인자로 사용하고 writeFruit() 함수를 호출하고 있다. 이런 쓰기 호출을 통해
 * 비동기 쓰기가 다른 쓰기에 앞서 실행되는 것을 보장할 수 있다.
 */

var fs = require('fs');
var fruitBowl = ['apple', 'orange', 'banana', 'grapes'];

function writeFruit(fd) {
	
	if(fruitBowl.length) {
		
		var fruit = fruitBowl.pop() + " ";
		fs.write(fd, fruit, null, null, function(err, bytes) {
			
			if(err) {
				
				console.log("File Write Failed.");
				
			} else {
				
				console.log("Wrote: %s %dbytes", fruit, bytes);
				writeFruit(fd);
				
			}
			
		});
		
	} else {
		
		fs.close(fd);
		
	}
	
}

fs.open("../data/fruit.txt", 'w', function(err, fd) {
	
	writeFruit(fd);
	
});