/*// for (let i = 0; i < 10; i++) {
//     console.log('지금 현재 i값은 ', i, '입니다.');

// }
// let j = 0;
// while (j < 11) {
//     console.log('지금 현재 j값은 ', j, '입니다.');
//     j++;
// }
let k = 5;
//이거는 한번 출력을 하고 그다음에 반복이 시작됩니다
do {
    console.log('현재의 k값은', k, '입니다');
    k++
}
while (k < 10);
*/
/*const person = {
    name: '김성진',
    age: 27,
    job: '학생'
}

for (key in person) {
    console.log(key);// 앞에 네임 에이지 일 들
    console.log(person[key]) //내용물 헷갈리면 그냥 외우자ㅏㅏ
    
} 
for (key in person) {
    if (key === 'age') {
        if (person[key] > 30) {
            console.log('30살미만인사람');
     }
    }*/


const persons = {
    김성진: {
        age: 27,
        job: '학생',
        sex: '남',
        height: 175,

    },
    김성준: {
        age: 25,
        job: '무직',
        sex: '여',
        height: 155,

    },
    김연재: {
        age: 31,
        job: '야가다',
        sex: '여',
        height: 174,
    },
};
/*
for (i in persons)
{
    console.log('i 값임', i);
    console.log('i의 value값임', persons[i] );
    for (j in persons[i]) {
        console.log('j 값임', j);
        console.log('j의 value값임', persons[i][j]);

    }
    
    

};*/

for (i in persons) {
    
        if ( persons[i].age < 30 && persons[i].sex === '여'){
             
        console.log('30살 미만이고 여자인  사람은', i, '입니다');
            }
    }

