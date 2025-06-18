import { useState } from 'react';

//문제 1. 버튼 클릭 시 숫자 증가시키기

const Q1 = () => {
  const [number, set] = useState(0);
  const inset = () => {
    set(number + 2);
  };
  return (
    <div>
      <p>숫자: {number}</p>
      <button onClick={inset}>2</button>
    </div>
  );
};

export default Q1;
