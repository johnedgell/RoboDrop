import React, { useRef } from 'react';
import './style.css'

export default function ControlPanel(props) {

  const myInput = useRef();
  let { error, errorMessage, input, sendInstructions } = props


  const sendData = () => {
    sendInstructions(myInput.current.value)
  }

  return (

    <div className="control-panel-container">

      {error &&
        <span className="error-message">{errorMessage}</span>
      }
      <div className="input-container">
        <textarea defaultValue={input} ref={myInput} >

        </textarea>

      </div>
      <div className="submit-button">
        <button onClick={sendData}>Submit</button>
      </div>
    </div>

  )
}