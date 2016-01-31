/**
 * 버퍼에서 읽기
 * 버퍼에서 읽는 과정을 설명하기 위해 아래 코드는 UTF8 인코딩 문자를 사용하는
 * 버퍼를 정하고 toString()을 별도의 파라미터 없이 사용해 모든 버퍼의 내용을 읽는다.
 * 그 후 encoding과 start, end 전달인자를 사용해 버퍼의 일부를 읽는다.
 * 16~18번 줄에서는 StringDecoder 객체를 UTF8 인코딩 방식으로 생성해 버퍼의 내용을
 * 콘솔에 출력한다. 다음으로 18번째 위치의 값을 8진수로 직접 읽고, 21번째 줄에서는
 * readUInt32BE()를 사용해 32비트 정수 값으로 읽는다.
 */

bufUTF8 = new Buffer("Some UTF8 Text \u00b6 \u30c6 \20ac", 'utf8');

console.log(bufUTF8.toString());
console.log(bufUTF8.toString('utf8', 5, 9));

var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');
console.log(decoder.write(bufUTF8));

console.log(bufUTF8[18].toString(16));
console.log(bufUTF8.readUInt32BE(18).toString(16));