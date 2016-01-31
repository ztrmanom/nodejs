/**
 * Readable 스트림
 * 아래 코드는 Readable 스트림의 기본 구현 및 읽기 절차를 보여준다.
 * Answers() 클래스는 Readable을 상속받고 Answers.prototype._read() 함수를 구현해
 * 데이터를 추출한다. 38번 줄에서는 직접 read() 호출을 통해 스트림의 처음 아이템을 읽은 후
 * 40~44번 줄의 data 이벤트 핸들러를 통해 남은 아이템을 읽는다.
 */

var stream = require('stream');
var util = require('util');

util.inherits(Answers, stream.Readable);

function Answers(opt) {
	
	stream.Readable.call(this, opt);
	this.quotes = ["yes", "no", "maybe"];
	this._index = 0;
	
}

Answers.prototype._read = function() {
	
	if (this._index > this.quotes.length) {
		
		this.push(null);
		
	} else {
		
		this.push(this.quotes[this._index]);
		this._index += 1;
		
	}
	
};

var r = new Answers();
console.log("Direct read: " + r.read().toString());

r.on('data', function(data) {
	
	console.log("Callback read: " + data.toString());
	
});

r.on('end', function(data) {
	
	console.log("No more ansers.");
	
});


