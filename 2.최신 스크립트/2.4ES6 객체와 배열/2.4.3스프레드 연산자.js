// 배열의 내용을 조합할 수 있다.
// 예를 들어 두 배열이 있다면 스프레드 연산자를 적용하여 두 배열의 모든 원소가 들어간 세 번째 배열을 쉽게 만들 수 있다.
var peak = [1,2,3];
var canyons = [4,5];
var seoraksan = [...peak, ...canyons];
console.log(seoraksan);

// 스프레드 연산자는 기존배열을 바꾸지 않고 리턴해주는 깊은 복사를 한다.
var peaks = [1,2,3];
var [last] = [...peaks].reverse();

console.log(last)
console.log(peaks.join(','));

//스프레드 연산자를 이용해서 나머지 원소를 얻을 수도 있다.
var lakes = [1,2,3,4]
var [first, ...rest] = lakes
console.log(rest.join(","));

//스프레드 연산자를 객체에 사용할 수 있다.
// 배열과 동일하게 사용하면 된다.