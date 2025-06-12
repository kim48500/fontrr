//html dom요소 가져오기
const btn = document.getElementById('eventBtn');  //에러 정상임 
const countdisplay = document.getElementById('count');
let count = 0;

btn.addEventListener("click", function (event) {
    count += 1;
    countdisplay.textContent = count; //화면에 반영
}
);
