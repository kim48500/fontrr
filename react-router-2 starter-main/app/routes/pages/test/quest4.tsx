import { useEffect, useState } from 'react';

//1초마다 숫자 증가
const Q4 = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    const sc = setTimeout(() => {
      setcount((prev) => prev + 1);
    }, 1000);
    return () => clearTimeout(sc);
  }, [count]);
  return <p>{count}</p>;
};

export default Q4;
