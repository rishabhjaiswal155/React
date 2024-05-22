import React from 'react'

function ListRendering() {
    const names=['Rishabh','Vishal','Mauli','Rishabh']
    //const namesList=names.map(name => <h2>{name}</h2>)
    // const namesList=names.map(name => <h2 key={name}>{name}</h2>)
    const namesList=names.map((name,index) => <h2 key={index}>{index}{name}</h2>)
  
  return (
    <div>{namesList}
        {/* {
        names.map(name => <h2>{name}</h2>)
        }  */}
    </div>
  )
}

export default ListRendering