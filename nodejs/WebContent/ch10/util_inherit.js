/**
 * 기타 객체의 기능들을 상속(inherits()을 사용해 event.EventEmitter의 프로토타입을 상속)
 * 아래 코드는 inherits()를 사용해 events.EventEmitter 객체의 생성자를 상속받아
 * Writable 스트림을 생성한 예다. 26번 줄에서 객체가 events.EventEmitter의 인스턴스임을
 * 확인한다. 또한 27번 줄은 Writer.super_의 값이 eventsEmitter라는 것을 보인다.
 */

var util = require('util');
var events = require('events');

function Writer() {
	
	events.EventEmitter.call(this);
	
}

util.inherits(Writer, events.EventEmitter);
Writer.prototype.write = function(data) {
	
	this.emit("data", data);
	
};

var w = new Writer();

console.log(w instanceof events.EventEmitter);
console.log(Writer.super_ === events.EventEmitter);

w.on("data", function(data) {
	
	console.log('Received data: "' + data + '"');
	
});

w.write("Some Data!");