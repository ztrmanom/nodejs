/**
 * Duplex 스트림
 * 아래 코드는 기본 코드들로 이뤄졌지만 Duplex 스트림에서 읽기, 쓰기를
 * 위한 주요 개념을 보여준다. Duplexer() 클래스는 Duplex를 상속받고
 * 객체의 배열 데이터 저장을 위한 기본 _write() 함수를 구현한다.
 * _read() 함수는 배열의 처음 아이템 접근을 위해 shift()를 사용하고
 * 읽는 내용이 "stop"인 경우 null을 푸시한다. 값이 있는 경우 값을 푸시하고,
 * 값이 없는 경우 timeout 타이머를 사용해 _read() 함수를 호출한다.
 */

var stream = require('stream');
var util = require('util');

util.inherits(Duplexer, stream.Duplex);

function Duplexer(opt) {
	
	stream.Duplex.call(this, opt);
	this.data = [];
	
}

Duplexer.prototype._read = function readItem(size) {
	
	var chunk = this.data.shift();
	if (chunk == "stop") {
		
		this.push(null);
		
	} else {
		
		if(chunk) {
			
			this.push(chunk);
			
		} else {
			
			setTimeout(readItem.bind(this), 500, size);
			
		}
		
	}
	
};

Duplexer.prototype._write = function(data, encoding, callback) {
	
	this.data.push(data);
	callback();
	
};

var d = new Duplexer();

d.on('data', function(chunk) {
	
	console.log("read: ", chunk.toString());
	
});

d.on('end', function(chunk) {
	
	console.log("Message Complete");
	
});

d.write("I think, ");
d.write("therefore ");
d.write("I am.");
d.write("Rene Descartes");
d.write("stop");