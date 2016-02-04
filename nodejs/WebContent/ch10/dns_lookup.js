/**
 * dns 모듈 사용(도메인과 IP 주소에 대해 룩업과 역변환 룩업을 수행)
 * 아래 코드는 룩업과 역변환 룩업을 수행하는 방법을 설명한다.
 * 번 줄에서 resolve4()는 IPv4 주소를 찾고, 번 줄에서 동일한 주소 값에 대해 reverse()를 호출해
 * 역변환 룩업을 수행한다.
 */

var dns = require('dns');

console.log("Resolving www.google.com . . .");
dns.resolve4('www.google.com', function(err, addresses) {
	
	console.log('IPv4 addresses: ' + JSON.stringify(addresses, false, ' '));
	addresses.forEach(function(addr) {
		
		dns.reverse(addr, function(err, domains) {
			
			console.log('Reverse for ' + addr + ': ' + JSON.stringify(domains));
			
		});
		
	});
	
});