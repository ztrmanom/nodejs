/**
 * TCP 소켓 클라이언트 구현(기본 TCP 소켓 클라이언트 구현)
 * 아래 코드는 기본 TCP 소켓 클라이언트의 전체 구현을 보여준다.
 * 클라이언트는 단순히 서버에 데이터를 보내고 받지만, 간단한 확장을 통해
 * 소켓 간 좀 더 복잡한 데이터 처리도 가능하다. 서버에 3개의 다른 소켓이 열려있고
 * 동시에 통신을 하고 있는 것을 주목하자. 각 클라이언트는 서로 다른 랜덤 포트 번호를 받아 생성된다.
 */

var net = require('net');

function getConnection(connName) {

	var client = net.connect({
		port: 8107,
		host: 'localhost'

	}, function() {

		console.log(connName + ' Connected: ');
		console.log(' local = %s:%s', this.localAddress, this.localPort);
		console.log(' remote = %s:%s', this.remoteAddress, this.remotePort);
		this.setTimeout(500);
		this.setEncoding('utf8');
		this.on('data', function(data) {

			console.log(connName + " From Server: " + data.toString());
			this.end();

		});

		this.on('end', function() {

			console.log(connName + ' Client disconnected');

		});

		this.on('error', function(err) {

			console.log('Socket Error: ', JSON.stringify(err));

		});

		this.on('timeout', function() {

			console.log('Socket Timed Out');

		});

		this.on('close', function() {

			console.log('Socket Closed');

		});

	});

	return client;

}

function writeData(socket, data) {

	var success = !socket.write(data);
	if (!success) {

		(function(socket, data) {

			socket.once('drain', function() {

				writeData(socket, data);

			});

		})(socket, data);

	}

}

var Dwarves = getConnection("Dwarves");
var Elves = getConnection("Elves");
var Hobbits = getConnection("Hobbits");

writeData(Dwarves, "More Axes");
writeData(Elves, "More Arrows");
writeData(Hobbits, "More Pipe Weed");