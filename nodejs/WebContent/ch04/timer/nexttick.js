/**
 * nextTick을 사용한 작업 스케줄링
 * 아래 코드는 블로킹 I/O 호출과 타이머, nextTick() 사용시 이벤트 순서를 나타낸다.
 * 블로킹 함수인 fs.stat()가 최초 실행 된 후 두 개의 setImmediate와 nextTick() 호출이 이뤄진다.
 * 결과 값은 nextTick()은 둘 다 다른 함수들 보다 우선해 실행되고, 그 다음으로 첫 setImmediate() 호출이
 * 이뤄진 후 다음 루프 반복 수행 시 setImmediate() 호출이 수행된다.
 */

var fs = require("fs");
fs.stat("nexttick.js", function(err, stats){

	if(stats) {
		
		console.log("nexttick.js Exists");
		
	}
	
});

setImmediate(function(){
	
	console.log("Immediate Timer 1 Executed");
	
});

setImmediate(function(){
	
	console.log("Immediate Timer 2 Executed");
	
});

process.nextTick(function(){
	
	console.log("Next Tick 1 Executed");
	
});

process.nextTick(function(){
	
	console.log("Next Tick 2 Executed");
	
});
