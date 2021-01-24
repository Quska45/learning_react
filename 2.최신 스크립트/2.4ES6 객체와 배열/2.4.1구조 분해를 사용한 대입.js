// 객체 안에 있는 필드 값을 원하는 변수에 대입할 수 있다.
// 값을 깊은 복사하기 때문에 값이 대입된 변수의 값을 변경해도 기존 객체에 영향을 주지 않는다.
// 객체에서 필요한 값만 구조 분해로 가져올 수도 있다.
var regularPerson = {
    firstname: "현석",
    lastname: "오"
}
var lordify = ({firstname}) => {
    console.log(`캔터베리의 ${firstname}`);
}
lordify(regularPerson); // 캔터베리의 현석

// 구조 분해는 더 선억적이다. 즉 코드 작성자의 의도를 더 잘 설명해준다.
// 구조 분해를 통해 가져오는 값만 사용하겠다는 것을 더 분명히 할 수 있다는 것이다.
var [firstResort] = [1,2,3];
console.log(firstResort); // 1
var [,,thirdResort] = [1,2,3];
console.log(thirdResort); //3

// 스프레드 연산자와 같이 잘 쓸 수 있다.