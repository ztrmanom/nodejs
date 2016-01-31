/**
 * 콜백 체인 구성
 * 아래 코드는 기본 콜백 체인을 구성하는 예다.
 * 아이템 목록이 logCars() 함수로 전달된 후 비동기 함수 logCar()가 호출된다.
 * logCar()가 완료되면 logCars() 함수가 콜백처럼 사용된다. 이 방식을 사용해 이벤트 큐에는
 * 하나의 logCar()가 속하게 된다.
 */

function logCar(car, callback) {
	
	console.log("Saw a %s", car);
	if(cars.length) {
		
		process.nextTick(function() {
			
			callback();
			
		});
		
	}
	
}

function logCars(cars) {
	
	var car = cars.pop();
	logCar(car, function() {
		
		logCars(cars);
		
	});
	
}

var cars = ["Ferrari", "Porsche", "Bugatti", "Lamborghini", "Aston Martin"];

logCars(cars);