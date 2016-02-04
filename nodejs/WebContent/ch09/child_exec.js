/**
 * exec()을 사용해 다른 프로세스의 시스템 명령을 실행(다른 프로세스 내에서 시스템 명령 실행)
 * 아래 코드는 exec() 함수를 사용해 시스템을 실행하는 예제이다.  
 */

var childProcess = require('child_process');
var options = {

		maxBuffer: 100*1024,
		encoding: 'utf8',
		timeout: 5000

};
var child = childProcess.exec('dir /B', options,
		function(error, stdout, stderr) {

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

	console.log('Completed with code: ' + code);

});