/**
 * execFile()을 사용해 다른 프로세스의 실행 가능 파일을 실행(다른 프로세스 내에서 실행 가능 파일을 실행)
 * 아래 코드는 execFile() 함수를 사용해 시스템 명령을 실행한 예제다.
 */

var childProcess = require('child_process');
var options = {

		maxBuffer: 100*1024,
		encoding: 'utf8',
		timeout: 5000

};
var child = childProcess.execFile('ping.exe', ['-n', '1', 'google.com'],

		options, function(error, stdout, stderr) {
	
	if(error) {
		
		console.log(error.stack);
		console.log('Error Code: ' + error.code);
		console.log('Error Signal: ' + error.signal);
		
	}
	
	console.log('Results: \n' + stdout);
	if(stderr.length) {
		
		console.log('Errors: ' + stderr);

	}

});

child.on('exit', function(code) {
	
	console.log('Child completed with code: ' + code);
	
});