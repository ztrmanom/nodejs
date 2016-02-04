/**
 * os 모듈 사용하기(os 모듈이 제공하는 메소드를 호출)
 * 아래 코드는 os 모듈의 각 함수를 호출한 결과를 화면에 출력했다.
 */

var os = require('os');
console.log("tmpdir : \t" + os.tmpdir());
console.log("endianness : \t" + os.endianness());
console.log("hostname : \t" + os.hostname());
console.log("type : \t" + os.type());
console.log("platform : \t" + os.platform());
console.log("arch : \t" + os.arch());
console.log("release : \t" + os.release());
console.log("uptime : \t" + os.uptime());
console.log("loadavg : \t" + os.loadavg());
console.log("totalmem : \t" + os.totalmem());
console.log("freemem : \t" + os.freemem());
console.log("EOL : \t" + os.EOL);
console.log("cpus : \t\t" + JSON.stringify(os.cpus()));
console.log("networkInterfaces : " + JSON.stringify(os.networkInterfaces()));