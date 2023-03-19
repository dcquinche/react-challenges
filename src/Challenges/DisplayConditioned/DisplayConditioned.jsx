import { useState } from "react"

const DisplayConditioned = () => {
  const [check, setCheck] = useState(false);

  const handleClickFalse = () => {
    setCheck(false);
  }
  const handleClickTrue = () => {
    setCheck(true);
  }

  return(
    <div>
      {
        check === false ? (
          <div>
            <input alt="condition" type="checkbox" name="checkboxText" id="checkboxText" onChange={handleClickTrue} />
            <label>Mostrar Información Importante</label>
          </div>
        ) : (
          <div>
            <input alt="condition" type="checkbox" name="checkboxText" id="checkboxText" onClick={handleClickFalse} />
            <label>Mostrar Información Importante</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque a reprehenderit necessitatibus nobis. Mollitia tempora blanditiis aspernatur eius placeat doloribus nemo odit sapiente, eos vero vel nulla veniam consequatur reiciendis!</p>
          </div>
        )
      }
    </div>
  )
}

export default DisplayConditioned;
