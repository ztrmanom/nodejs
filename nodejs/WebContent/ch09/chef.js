/**
 * 자식 프로세스 포크 구현(메시지 이벤트를 처리하고 부모 프로세스에 데이터를 다시 전송하는 자식 프로세스)
 * 아래 코드는 부모 프로세스의 메시지를 전달받기 위해 process.on('message') 콜백을 구현하고,
 * process.send() 함수를 사용해 부모 프로세스의 응답을 전송한다.
 * 이 과정을 통해 부모 자식 프로세스 간 IPC 메커니즘이 구현된다.
 */

process.on('message', function(message, parent) {
	
	var meal = {};
	switch(message.cmd) {
	
	case 'makeBreakfast':
		meal = ["ham", "eggs", "toast"];
		break;
	case 'makeLunch':
		meal = ["burger", "fries", "shake"];
		break;
	case 'makeDinner':
		meal = ["soup", "salad", "steak"];
		break;
	
	}
	
	process.send(meal);
	
});