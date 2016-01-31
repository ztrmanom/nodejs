/**
 * 버퍼 생성하기
 * 버퍼 객체는 실제 기본 메모리를 할당하기 때문에 생성시 크기를 지정해야 한다.
 * new 키워드를 이용해 Buffer 객체 생성시에 세 가지 옵션이 있다.
 * new Buffer(sizeInBytes)
 * new Buffer(octetArray)
 * new Buffer(string, [encoding])
 * 
 * 버퍼에 쓰기
 * 버퍼에 데이터를 쓰는 과정을 보여주기 위해 아래 코드는 버퍼를 정의하고 0으로
 * 채운 후, 21번 줄에서 write()를 이용해 텍스트를 추가한다. 25번째 줄에서
 * write(string, offset, length)를 사용해 기존 버퍼의 일부 텍스트를 변경한다.
 * 27번째 줄에서는 숫자를 사용해 마지막 위치에 +을 추가한다. 아래 코드 실행 결과는
 * buf256.write("more text", 9, 9) 문장은 버퍼 중간의 내용을 변경하고 buf256[18] = 43은
 * 단일 바이트의 내용을 변경한다. 
 */

buf256 = new Buffer(256);
buf256.fill(0);

buf256.write("add some text");
console.log(buf256.toString());

buf256.write("more text", 9, 9);
console.log(buf256.toString());

buf256[18] = 43;
console.log(buf256.toString());