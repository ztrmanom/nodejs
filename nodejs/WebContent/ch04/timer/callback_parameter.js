/**
 * 콜백 함수에 추가 전달인자 보내기
 * 아래 코드는 콜백 전달인자를 구현하는 방법을 보여준다. sawCar 이벤트 핸들러가 두 개 존재하고
 * make 전달인자만 방출한다. 38번 줄에 있는 첫 이벤트 핸들러는 logCar(make)콜백 핸들러를
 * 등록한 부분이다. logColorCar()에 색상 추가를 위해 39~45번 줄에 정의된 이벤트 핸들러에서는
 * 익명 함수를 사용한다. 임의로 선택된 색상은 logColorCar(make, color)에 전달된다.
 */

var events = require('events');

function CarShow() {
	
	events.EventEmitter.call(this);
	this.seeCar = function(make) {
		
		this.emit('sawCar', make);
		
	};
	
}

CarShow.prototype.__proto__ = events.EventEmitter.prototype;

var show = new CarShow();

function logCar(make) {
	
	console.log("Saw a " + make);
	
}

function logColorCar(make, color) {
	
	console.log("Saw a %s %s", color, make);
	
}

show.on("sawCar", logCar);
show.on("sawCar", function(make) {
	
	var colors = ['red', 'blue', 'black'];
	var color = colors[Math.floor(Math.random() * 3)];
	logColorCar(make, color);
	
});

show.seeCar("Ferrari");
show.seeCar("Porsche");
show.seeCar("Bugatti");
show.seeCar("Lamborghini");
show.seeCar("Aston Martin");