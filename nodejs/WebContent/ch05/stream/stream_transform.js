/**
 * Transform 스트림
 * 아래 코드는 Transform 스트림의 기본 구현 내용을 보여준다.
 * 스트림은 JSON 문자열을 받아서 객체로 변환 후 object라는 이름의
 * 이벤트를 생성한다. _transform() 함수는 객체에 handled 속성을 추가하고
 * 문자열 형태로 보낸다. 40~45번 줄은 특정 속성 값들을 표시하는
 * object 이벤트 핸들러 함수 구현이다.
 * JSON 문자열에 handled 속성이 포함된 것을 확인하자.
 */

var stream = require('stream');
var util = require('util');

util.inherits(JSONObjectStream, stream.Transform);

function JSONObjectStream(opt) {
	
	stream.Transform.call(this, opt);
	
}

JSONObjectStream.prototype._transform = function(data, encoding, callback) {

	object = data ? JSON.parse(data.toString()) : "";
	this.emit("object", object);
	object.handled = true;
	this.push(JSON.stringify(object));
	callback();
	
};

JSONObjectStream.prototype._flush = function(cb) {
	
	cb();
	
};

var tc = new JSONObjectStream();

tc.on('object', function(object) {
	
	console.log("Name: %s", object.name);
	console.log("Color: %s", object.color);
	
});

tc.on('data', function(data) {
	
	console.log("Data: %s", data.toString());
	
});

tc.write('{"name":"Carolinus", "color": "Green"}');
tc.write('{"name":"Solarius", "color": "Blue"}');
tc.write('{"name":"Lo Tae Zhao", "color": "Gold"}');
tc.write('{"name":"Ommadon", "color": "Red"}');