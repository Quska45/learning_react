// 비동기적인 동작을 잘 다루기 위한 방법이다.
const getFakeMembers = count => new Promise((resolves, rejects) => {
    const api = `http://api.randomuser.me/?nat=US&results=${count}`;
    const request = new XMLHttpRequest();
    request.open('GET', api);
    request.onload = () => 
        (request.status === 200) ?
        resolves(JSON.parse(request.response).results) :
        rejects(Error(request.statusText))
    request.onerror = (err) => rejects(err)
    request.send()
})

getFakeMembers(5).then(
    members => console.log(members),
    err => console.error(
        new Error("randomuser.me에서 멤버를 가져올 수 없습니다.")
    )
)