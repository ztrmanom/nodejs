/**
 * 스트림 압축/해제
 * 아래 코드는 zlib.Gzip() 객체를 사용해 한 파일의 내용을 압축하고
 * zlib.Gunzip() 객체를 이용해 압축 해제를 한다. 디스크에 데이터를
 * 반영할 시간을 제공하기 위해 압축 해제를 진행하기 전 5초 간 지연시키는 내용을 확인하자.
 */

var zlib = require('zlib');
var gzip = zlib.createGzip();
var fs = require('fs');
var inFile = fs.createReadStream('zlib_file.js');
var outFile = fs.createWriteStream('zlib_file.gz');

inFile.pipe(gzip).pipe(outFile);

setTimeout(function() {
	
	var gunzip = zlib.createUnzip({flush: zlib.Z_FULL_FLUSH});
	var inFile = fs.createReadStream('zlib_file.gz');
	var outFile = fs.createWriteStream('zlib_file.unzipped');
	inFile.pipe(gunzip).pipe(outFile);
	
}, 3000);