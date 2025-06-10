const a = 1;
const b = 2;
const c = 1;

if (a === b) {
    console.log('조건문 안에 들어옴');
} else if(a !== c) {
    console.log
        ('첫번째 조건이 달라서 여기로옴');
}
else if (a !== c) {
    console.log
        ('두번째 조건이 달라서 여기로옴');
}
else if (b > c) {
    console.log
        ('3번째 조건이 달라서 여기로옴');
}
else if (c === a) {
    console.log
        ('4번째 조건이 달라서 여기로옴');
}
else if (b < c) {
    console.log
        ('5번째 조건이 달라서 여기로옴');
}
else {
    console.log('조건문이 충족되지 않음');
}

//삼항 연산자
const result = a === b ? 'a와 b는 같습니다' : 'a와 b는 다릅니다';
console.log(result);
// switch
switch (a) {
    case b:
        console.log('a와 b와 같습니다');
        break;
    case c:
        console.log('a와 c와 같습니다');
        break;
    default:
        console.log('a는 b와 c나 같지않습니다');
    

}
