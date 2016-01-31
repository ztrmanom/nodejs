/**
 * 인터벌 타이머로 주기적 작업 수행
 * 아래 코드는 변화하는 x와 y, z값을 간격으로 콜백 함수를 수행한다.
 * 결과 값은 x는 y보다 2배 빠르게 증가하고, y는 z보다 2배 빠르게 증가한다.
 */

var x=0, y=0, z=0;

function displayValues() {
	
	console.log("X=%d; Y=%d; Z=%d", x, y, z);
	
}

function updateX() {
	
	x += 1;
	
}

function updateY() {
	
	y += 1;
	
}
function updateZ() {
	
	z += 1;
	displayValues();
	
}

setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);