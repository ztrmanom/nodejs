/**
 * 디렉토리 추가
 * 아래 코드는 순차 방식으로 서브 디렉토리 생성 방법을 보여준다.
 */

var fs = require('fs');

fs.mkdir("./data/folderA", function(err) {

	console.log(err ? "Directory Add Failed" : "Directory Added");

	fs.mkdir("./data/folderA/folderB", function(err) {

		console.log(err ? "Directory Add Failed" : "Directory Added");

		fs.mkdir("./data/folderA/folderB/folderD", function(err) {

			console.log(err ? "Directory Add Failed" : "Directory Added");

		});

	});
});
