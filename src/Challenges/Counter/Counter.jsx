import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClickCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleClickCount}>Aumentar Contador</button>
      <p>{count}</p>
    </div>
  )
}

export default Counter;
