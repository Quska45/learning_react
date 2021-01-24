// function 키워드 없이도 함수를 만들 수 있고 return을 사용하지 않아도 식을 계산한 값이 자동으로 반환된다.
// 파라미터를 하나만 받는 경우엔 파라미터 주변의 괄호를 생략해도 된다.
// 화살표 함수는 this를 새로 바인딩 하지 않는다.

//예전 방식
var gangwon = {
    resorts: [1,2,3,4,5],
    print: function(delay=1000){
        setTimeout(function(){
            console.log(this.resorts.join(","));
        }, delay);
    }
}
//gangwon.print(); // undefined에러 발생

//화살표 함수 방식
var gangwon = {
    resorts: [1,2,3,4,5],
    print: function(delay=1000){
        setTimeout(()=>{
            console.log(this.resorts.join(","));
        }, delay);
    }
}
gangwon.print(); // 1,2,3,4,5 출력