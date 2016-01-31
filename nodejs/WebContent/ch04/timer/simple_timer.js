/**
 * 타임아웃 타이머를 사용한 작업 지연
 * 아래 코드는 지정된 타임아웃이 경과한 후 밀리 초 단위의 결과를 출력하는
 * simpleTimeout() 함수를 호출하는 간단한 형태의 타임아웃 코드다.
 * 결과 값은 setTimeout()이 호출된 순서와는 관계없이 지연 시간이 지난 순서에 따라 출력된다.
 */

function simpleTimeout(consoleTimer) {
	
	console.timeEnd(consoleTimer);
	
}

console.time("twoSecond");
setTimeout(simpleTimeout, 2000, "twoSecond");

console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");