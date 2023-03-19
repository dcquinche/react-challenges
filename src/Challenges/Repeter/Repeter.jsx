import { useState } from "react";

const Repeter = () => {
  const [text, setText] = useState('');

  const handleChange = ({target}) => {
    setText(target.value);
  }
  return(
    <div>
      <input alt="text" type="text" onChange={handleChange} />
      <p>{text}</p>
    </div>
  )
}

export default Repeter;
