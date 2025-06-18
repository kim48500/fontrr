//문제 3. 버튼 누르면 3초 후 메시지 표시

import { useState } from 'react';

const Q3 = () => {
  const [isRendering, setIsRenderinh] = useState(false);

  ('메세지가 등장');

  const handleCleck = () => {
    //setIsRenderinh(false);
    setTimeout(() => {
      setIsRenderinh(true);
    }, 3000);
  };

  return (
    <div>
      <button onClick={handleCleck}>누르기</button>;{isRendering && <div>짜잔</div>}
    </div>
  );
};

export default Q3;
