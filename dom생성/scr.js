//html dom요소 가져오기
const btn = document.getElementById('eventBtn');  //에러 정상임 
const container = document.getElementById('container');
let count = 0;

btn.addEventListener("click", function (event) {
    count += 1;
    const newDiv = document.createElement('div');
    newDiv.className = 'box';
    newDiv.textContent = `${count}번째로 생성된 div`;
    container.appendChild(newDiv)
}

);
