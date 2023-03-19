import { useState, useEffect } from "react";

const StrCounter = () => {
  const [count, setCount] = useState(0);
  const [str, setStr] = useState('');

  const handleChange= ({target}) => {
    setStr(target.value)
  }

  useEffect(() => {
    setCount(str.length)
  }, [str])

  return (
    <div>
      <textarea onChange={handleChange}></textarea>
      <p>{count}</p>
    </div>
  )
}

export default StrCounter;
