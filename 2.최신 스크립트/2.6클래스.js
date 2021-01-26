// 이제 자바스크립트도 클래스가 생겨서 사용할 수 있다.
class Vacation {
    constructor(destination, length){
        this.destination = destination;
        this.length = length;
    }

    print(){
        console.log(`${this.destination}은 ${this.length}일 걸립니다.`);
    }
}

const trip = new Vacation("칠레", 7);
trip.print()

class Expedition extends Vacation{
    constructor(destination, length, gear){
        super(destination, length)
        this.gear = gear
    }
    print(){
        super.print()
        console.log(`당신의 ${this.gear.join("와 당신의")}를 가져오세요.`)
    }
}

const trip2 = new Expedition("한라", 3, [1,2,3]);
trip2.print();

//클래스를 사용하지만 내부적으로는 prototype을 사용한다는 것을 알아두는 것이 좋다.