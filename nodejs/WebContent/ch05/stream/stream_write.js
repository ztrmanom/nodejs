/**
 * Writable 스트림
 * 아래 코드는 Writable 스트림의 기본 구현과 쓰기 방법을 보여준다.
 */

var stream = require('stream');
var util = require('util');

util.inherits(Writer, stream.Writable);

function Writer(opt) {

	stream.Writable.call(this, opt);
	this.data = new Array();
	
}

Writer.prototype._write = function(data, encoding, callback) {
	
	this.data.push(data.toString('utf8'));
	console.log("Adding: " + data);
	callback();
	
};

var w = new Writer();

for (var i = 1; i <= 5; i++) {

	w.write("Item" + i, 'utf8');
	
}

w.end("ItemLast");
console.log(w.data);