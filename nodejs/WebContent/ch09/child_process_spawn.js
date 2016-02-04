/**
 * spawn()을 사용해 다른 Node.js 객체에서 프로세스를 생성(다른 프로세스에서 명령을 생성)
 * 아래 코드는 spawn() 함수를 사용해 시스템 명령을 실행하는 예제다. 
 */

var spawn = require('child_process').spawn;
var options = {
		
		env: {user:'brad'},
		detached: false,
		stdio: ['pipe','pipe','pipe']
		
};
var child = spawn('netstat', ['-e']);

child.stdout.on('data', function(data) {
	
	console.log(data.toString());
	
});

child.stderr.on('data', function(data) {
	
	console.log(data.toString());
	
});

child.on('exit', function(code) {
	
	console.log('Child exited with code: ' + code);
	
});