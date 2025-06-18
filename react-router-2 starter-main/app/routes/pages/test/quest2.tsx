// 문제 2. input 값을 state로 저장하고, 변경 시 콘솔에 출력

import { useEffect, useState } from 'react';

const Q2 = () => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('1');

  const handleInput = (e) => {
    setText2(e.target.value);
  };

  useEffect(() => {
    console.log('text', text2);
  }, [text2, text]); //[] 의존성 배열

  return (
    <div>
      <h1>내용입력</h1>
      <input
        placeholder="내용을입력하세요"
        value={text2}
        onChange={(e) => handleInput(e)}
      />
    </div>
  );
};

export default Q2;
