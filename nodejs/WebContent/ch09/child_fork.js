/**
 * 자식 프로세스 포크 구현(3개의 자식 프로세스를 생성하고 병렬적으로 명령을 전송하는 부모 프로세스)
 * 아래 코드는 fork()를 사용해 chef.js의 코드로 동작하는 3개의 자식 프로세스를 생성한다.
 * 자식 프로세스 생성 후 부모 프로세스는 자식 프로세스에 명령을 보내기 위해 ChildProcess 객체를 사용한다.
 */

var child_process = require('child_process');
var options = {
		
		env: {user:'Brad'},
		encoding: 'utf8'
		
};

function makeChild() {
	
	var child = child_process.fork('chef.js', [], options);
	child.on('message', function(message) {
		
		console.log('Served: ' + message);
		
	});
	
	return child;
	
}

function sendCommand(child, command) {
	
	console.log('Requesting: ' + command);
	child.send({cmd:command});
	
}

var child1 = makeChild();
var child2 = makeChild();
var child3 = makeChild();

sendCommand(child1, "makeBreakfast");
sendCommand(child2, "makeLunch");
sendCommand(child3, "makeDinner");