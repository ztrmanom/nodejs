/**
 * 디렉토리 삭제
 * 아래 코드는 순서를 고려한 하위 디렉토리 삭제 내용이다.
 */

var fs = require('fs');

fs.rmdir("./data/folderA/folderB/folderD", function(err) {

	console.log(err ? "Directory Delete Failed" : "Directory Deleted");

	fs.rmdir("./data/folderA/folderB", function(err) {

		console.log(err ? "Directory Delete Failed" : "Directory Deleted");

		fs.rmdir("./data/folderA/folderC/folderE", function(err) {

			console.log(err ? "Directory Delete Failed" : "Directory Deleted");

			fs.rmdir("./data/folderA/folderC", function(err) {

				console.log(err ? "Directory Delete Failed" : "Directory Deleted");

				fs.rmdir("./data/folderA", function(err) {

					console.log(err ? "Directory Delete Failed" : "Directory Deleted");

				});
			});
		});

	});

});