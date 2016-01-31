/**
 * Readable 스트림과 Writable 스트림을 파이프 형태로 연결
 * 아래 코드는 Readable 스트림과 Writable 스트림을 구현한 후
 * pipe() 함수를 사용해 이 둘을 연결시킨다.
 * 기본 처리 흐름은 _write() 함수를 사용해 데이터를 입력하고 콘솔로 결과를 출력한다.
 */

var stream = require('stream');
var util = require('util');

util.inherits(Reader, stream.Readable);
util.inherits(Writer, stream.Writable);

function Reader(opt) {
	
	stream.Readable.call(this, opt);
	this._index = 1;
	
}

Reader.prototype._read = function(size) {
	
	var i = this._index++;
	if (i > 10) {
		
		this.push(null);
		
	} else {
		
		this.push("Item " + i.toString());
		
	}
	
};

function Writer(opt) {
	
	stream.Writable.call(this, opt);
	this._index = 1;
	
}

Writer.prototype._write = function(data, encoding, callback) {
	
	console.log(data.toString());
	callback();
	
};

var r = new Reader();
var w = new Writer();

r.pipe(w);