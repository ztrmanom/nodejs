/**
 * TCP 소켓 서버 구현(기본 TCP 소켓 서버 구현)
 * 아래 코드는 기본 TCP 소켓 서버의 전체 구현을 보여준다.
 * 소켓 서버는 8107 포트로 연결을 받고, 데이터를 읽은 후 클라이언트에 문자열을 쓴다.
 * 기본 구현 내용이지만, 이벤트를 처리하고 클라이언트 연결에서 데이터를 읽고 쓰는 내용을 보여준다.
 */

var net = require('net');
var server = net.createServer(function(client) {

	console.log('Client connection: ');
	console.log(' local = %s:%s', client.localAddress, client.localPort);
	console.log(' remote = %s:%s', client.remoteAddress, client.remotePort);
	client.setTimeout(500);
	client.setEncoding('utf8');
	client.on('data', function(data) {

		console.log('Received data from client on port %d: %s',
				client.remotePort, data.toString());
		console.log(' Bytes received: ' + client.bytesRead);
		writeData(client, 'Sending: ' + data.toString());
		console.log(' Bytes sent: ' + client.bytesWritten);

	});

	client.on('end', function() {
		
		console.log('Client disconnected');
		server.getConnections(function(err, count) {
			
			console.log('Remaining Connections: ' + count);
			
		});
		
	});
	
	client.on('error', function(err) {
		
		console.log('Socket Error: ', JSON.stringify(err));
		
	});
	
	client.on('timeout', function() {
		
		console.log('Socket Timed Out');
		
	});
	
});

server.listen(8107, function() {
	
	console.log('Server listening: ' + JSON.stringify(server.address()));
	server.on('close', function() {
		
		console.log('Server Terminated');
		
	});
	
	server.on('error', function(err) {
		
		console.log('Server Error: ', JSON.stringify(err));
		
	});
	
});

function writeData(socket, data) {
	
	var success = !socket.write(data);
	if (!success) {
		
		(function(socket, data) {
			
			socket.on('drain', function() {
				
				writeData(socket, data);
				
			});
			
		})(socket, data);
		
	}
	
}