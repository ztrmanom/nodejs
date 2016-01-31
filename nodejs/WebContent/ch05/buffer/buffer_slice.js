/**
 * 버퍼 분할
 * 아래 코드는 분할을 사용하는 방법을 보여준다.
 * 중요한 점은 13~14번 줄의 slice 수정 내용이 원본의 변화를 가져온 것이다.
 */

var numbers = new Buffer("123456789");
console.log(numbers.toString());

var slice =  numbers.slice(3, 6);
console.log(slice.toString());

slice[0] = '#'.charCodeAt(0);
slice[slice.length-1] = '#'.charCodeAt(0);
console.log(slice.toString());
console.log(numbers.toString());