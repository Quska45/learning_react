//- 함수의 default parameter를 지정 할 수 있다.

function logActivity(name='오성원', activity="테니스"){
    console.log(`${name}은 ${activity}를 좋아합니다.`);
}

logActivity();

//문자열 뿐만 아니라 어떤 타입의 값도 디폴트 값으로 사용할 수 있다.
var defaultPerson = {
    name: {
        first: "성원",
        last: "오"
    },
    favActivity: "테니스"
}

function logActivity2(p=defaultPerson){
    console.log(p);
    console.log(`${p.name.first}은 ${p.favActivity}를 좋아합니다.`);
}
logActivity2();