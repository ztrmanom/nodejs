/**
 * 파일 목록 나열
 * 아래 코드는 중첩된 콜백 체인을 사용해 디렉토리 구조를 탐색하고 목록을 출력한다.
 * 콜백 함수는 fullPath 변수를 전달하기 위해 래퍼 함수를 사용해 클로저를 구현하고
 * \반복적으로 WalkDirs() 함수를 비동기 콜백으로 실행한다.
 */

var fs = require('fs');
var Path = require('path');

function WalkDirs(dirPath) {
	
	console.log(dirPath);
	fs.readdir(dirPath, function(err, entries) {
		
		for(var idx in entries) {
			
			var fullPath = Path.join(dirPath, entries[idx]);
			(function(fullPath) {
			
				fs.stat(fullPath, function(err, stats) {
					
					if(stats && stats.isFile()) {
						
						console.log(fullPath);
						
					} else if(stats && stats.isDirectory()) {
						
						WalkDirs(fullPath);
						
					}
					
				});
				
			}) (fullPath);
			
		}
		
	});
	
}

WalkDirs('../depd')