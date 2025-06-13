const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let current = ''; //현재값
let oprator = '';//연산값
let prev = ''; //이전값

buttons.forEach((btn) => {
    //r가져온 버튼들을 반복문을 돌린다
    btn.addEventListener('click', () => {
        //버튼들을 하나하나  클릭이벤트를해준다
        const value = btn.textContent;
        console.log(value)

        if (value === "C") {
            current = '';
            prev = '';
            oprator = '';
            display.value = '';
        } else if (['+', '-', 'x', '÷'].includes(value)) {
            if (current === '') {
                //현재값이 없다면 정지
                return;
            }
            oprator = value; //연산값을 oprator을 넣어준다 
            prev = current//현재값을 이전값에 사용
            current = ''; //현재값을 빈문자열에 사용

        } else if (value === '=') {
            if (oprator === '' || current === '' || prev === '') {
                return
            }
            const a = parseFloat(prev)//문자열이 숫자로 바뀌게
            const b = parseFloat(current);
            let result = 0;
            if (oprator === '+') {
                result = a + b;
            } else if (oprator === '-') {
                result = a - b;
            }
            else if (oprator === '*') {
                result = a * b;
            } else if (oprator === '÷') {
                result = a / b;
            }
            display.value = result;
            current = result.toString();
            oprator = '';
            prev = '';

        } else {
            current += value;//문자열이므로 더했을때 문자열로 더해짐
            display.value = current; // input태그안에 현재값을 적용
        }


    }

    )
}
)




