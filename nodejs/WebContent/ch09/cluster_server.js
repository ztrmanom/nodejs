/**
 * HTTP 클러스터 구현(최대 4개의 worker 프로세스를 생성하는 마스터 프로세스)
 * 아래 코드는 HTTP 서버의 기본 클러스터 구현을 보여준다. 15~32번 줄에서는 클러스터
 * worker의 fork와 listening, exit의 이벤트 리스너를 등록한다.
 * 34번 줄에서는 setupMaster()를 호출하고 실행할 cluster_worker.js를 지정한다.
 * 36~42번 줄에서는 cluster.fork() 호출을 통해 worker를 생성한다.
 * 마지막으로 45~53번 줄에서는 worker를 순회하면서 각각에 on('message') 이벤트 핸들러를 등록한다.
 */

var cluster = require('cluster');
var http = require('http');

if(cluster.isMaster) {

	cluster.on('fork', function(worker) {

		console.log("Worker " + worker.id + " create");

	});

	cluster.on('listening', function(worker, address) {

		console.log("Worker " + worker.id + " is listening on " + 
				address.address + ":" + address.port);

	});
	
	cluster.on('exit', function(worker, code, signal) {
		
		console.log("Worker " + worker.id + " Exited");
		
	});
	
	cluster.setupMaster({exec: 'cluster_worker.js'});
	
	var numCPUs = require('os').cpus().length;
	
	for(var i = 0; i < numCPUs ; i++) {
	
		if(i >= 4) break;
		cluster.fork();
		
	}
	
	Object.keys(cluster.workers).forEach(function(id) {
		
		cluster.workers[id].on('message', function(message) {
			
			console.log(message);
			
		});
		
	});

}