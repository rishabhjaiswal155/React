import React from 'react'

function ListRendering() {
    const names=['Rishabh','Vishal','Mauli']
    const namesList=names.map(name => <h2>{name}</h2>)
  return (
    <div>{namesList}
        {/* {
        names.map(name => <h2>{name}</h2>)
        }  */}
    </div>
  )
}

export default ListRendering