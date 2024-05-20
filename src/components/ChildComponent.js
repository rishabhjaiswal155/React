import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={()=>props.GreetHandler('child')}>GreetParent</button>
    </div>
  )
}

export default ChildComponent