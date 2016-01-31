/**
 * 콜백 내 클로저 구현
 * 아래 코드는 비동기 함수 logCar()에 클로저를 제공하는 래퍼(wrapper) 함수 구현을 보여준다.
 * 20~29번 줄에 나오는 반복문은 기본 콜백 구현을 사용한다. 결과를 보면 루프 내 메시지가
 * 계속 변하지만 자동차 이름은 항상 마지막에 읽는 항목으로 출력된다.
 * 
 * 34~47번 줄에 나오는 반복문은 콜백에 종속된 msg 전달인자로 메시지를 전달하는 구현을 보여준다.
 * 클로저를 사용한 결과는 올바른 메시지를 출력한다. 콜백을 진정으로 비동기적으로 만들려면
 * 콜백을 스케줄링하기 위해 process.nextTick() 함수를 사용하도록 한다.
 */

function logCar(logMsg, callback) {
	
	process.nextTick(function() {
		
		callback(logMsg);
		
	});
	
}

var cars = ['Ferrari', 'Porsche', 'Bugatti'];

for (var idx in cars) {
	
	var message = "Saw a " + cars[idx];
	logCar(message, function() {
		
		console.log("Normal Callback: " + message);
		
	});
	
}

for (var idx in cars) {
	
	var message = "Saw a " + cars[idx];
	(function(msg) {
		
		logCar(msg, function() {
			
			console.log("Closure Callback: " + msg);
			
		});
		
	}) (message);
	
}