// Q5: 버튼을 눌렀을 때 클릭 횟수를 저장하고, 5번이 되면 콘솔에 "5번 클릭!"을 출력하는 컴포넌트

import { useEffect, useState } from 'react';

const Q5 = () => {
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick((prev) => prev + 1);
  };
  useEffect(() => {
    if (click === 5) {
      console.log('5번클릭');
    }
  }, [click]);

  return (
    <div>
      <p>클릭 횟수: {click}</p>
      <button onClick={handleClick}>클릭!</button>
    </div>
  );
};
export default Q5;
