// 구조 분해의 반대라고 할 수 있다.
// 구조를 다시 만들어내는 과정 또는 내용을 한데 묶는 과정이라 할 수 있다.
// 현재 영역에 있는 변수를 객체의 필드로 묶을 수 있다.

var name = 1;
var elevation = 2;
var funHike = {name, elevation};

console.log(funHike);

//객체 메서드를 만드는 것도 가능하다.
var print = function(){
    console.log(`${this.name} ${this.elevation}`);
}
var funHike2 = {name, elevation, print}
funHike2.print();

//객체 메서드를 정의할 때 function 키워드를 사용하지 않아도 된다.
const skier = {
    name,
    powerderYell(){
        let yell = this.sound.toUpperCase();
        console.log(name);
    }
}