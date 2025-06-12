/*const a = ['apple', 'banana', 'cherry'];
const cpidedFruits = [...a];
cpidedFruits.push('orenge');
console.log('original a:', a)
console.log('copeid a:', cpidedFruits)
*/
const user = {
    name: "John",
    age: 30,
    address: {
        city: "Seoul",
        zip: "12345"
    }
};

let {
  name,
  age,
  address: { city }
} = user;
console.log(name, age, city);

const colors = ["red", "green", "blue"];

// TODO: 구조 분해 할당으로 첫 번째와 두 번째 색상을 각각 다른 변수에 담으세요.
let [firstColor, secondColor] = colors;
console.log(firstColor, secondColor);


    
function printUserInfo(user) {
  // TODO: 구조 분해 할당을 사용해 name, age를 꺼내고 출력하세요.
  let { name, age } = user;
  console.log(`Name: ${ name }, Age: ${ age } `);
}

printUserInfo({ name: "Jane", age: 28, job: "developer" });

function handleColors(colors) {
  // TODO: 구조 분해 할당과 전개 연산자를 이용해 구현하세요.
  // TODO: 첫번째, 두번째, 그리고 나머지 아이템을 구조분해할당으로 각 변수에 구분하여 출력하세요.
  // 예: ["red", "green", "blue", "yellow"] =>
  // "First: red, Second: green, Rest: blue,yellow"
  let [first, second, ...rest] = colors;
  console.log(`First: ${ first }, Second: ${ second }, Rest: ${ rest } `);
}

handleColors(["red", "green", "blue", "yellow"]);
