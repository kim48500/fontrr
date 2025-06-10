const person = {
    name: '김성진',
    age: 25,
    job: '개발자',
    talk: (sentence) => {
        return sentence;

    },
    hobbies: {
        hobby1: '개발공부',
        hobby2: '운동',
    },
};

console.log(`안녕하세요 저는 ${person.name}입니다.
    제나이는 ${person.age}이고  제직업은${person.job}입니다
    제취미는 ${person.hobbies.hobby1} 와 ${person.hobbies.hobby1} 입니다
    ${person.talk('앞으로 잘부탁드립니다')}
    `);

const person2 = { ...person }; // 오브젝트어사인
person2.name = "김상진";
console.log('옅은 첫번째복사 ', person2.name);
console.log(person2);

//깊은 복사
const deepCopy = (origin) => {
    const result = {};  //빈객체를 만들어주고
    for (let key in origin) {
        if (origin[key] !== null && typeof origin[key] == 'object') {
            result[key] = deepCopy(origin[key]);
        } else {
            result[key] = origin[key];
        }
    }
    return result;
}
const person4 = deepCopy(person);g
console.log('깊은복사 ', person4);
ds