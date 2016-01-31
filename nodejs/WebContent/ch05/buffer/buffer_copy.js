/**
 * 버퍼 복사
 * 아래 코드는 버퍼간 복사를 위한 세 가지 예를 보여준다.
 * 13~18번 줄에서는 풀 버퍼 복사 방법을 보여준다.
 * 21~26번 줄에서는 버퍼 중간의 5바이트 복사 방법을 보여준다.
 * 29~43번 줄은 소스 버퍼를 순환하며 버퍼에 모든 바이트 내용을 복사한다.
 */

var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());

// 전체 버퍼를 복사한다.
var blank = new Buffer(26);
blank.fill();
console.log("Blank: " + blank.toString());

alphabet.copy(blank);
console.log("Blank: " + blank.toString());

// 버퍼 일부분을 복사한다.
var dashes = new Buffer(26);
dashes.fill('-');
console.log("Dashes: " + dashes.toString());

alphabet.copy(dashes, 10, 10, 15);
console.log("Dashes: " + dashes.toString());

// 버퍼의 특정 부분을 기준으로 삼아 복사한다.
var dots = new Buffer('--------------------------');
dots.fill('.');
console.log("dots: " + dots.toString());

for (var i = 0; i < dots.length; i++) {
	
	if(i % 2) {
		
		dots[i] = alphabet[i];
		
	}
	
}

console.log("dots: " + dots.toString());