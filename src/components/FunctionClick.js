import React from 'react'

function FunctionClick() {
    function ClickHandler(){
        console.log("button clicked")
    }
  return (
    <div>FunctionClick<br/>
        <button onClick={ClickHandler}>ClickMe</button>
    </div>
  )
}

export default FunctionClick