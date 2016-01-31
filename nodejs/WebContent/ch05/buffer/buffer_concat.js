/**
 * 버퍼 병합
 * 아래 코드는 기본 Buffer 객체에 하나의 버퍼씩 연결하는 내용을 보여준다.
 */

var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Air Speed Velocity of an ");

console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());