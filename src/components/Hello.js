import React from "react";
const Hello = () => {
//     return(
//         <div className='Hello'><h1>concept of JSX and createElement() method</h1>
//         </div>
//         )
return React.createElement('div',{id: 'Hello',className:'dummy'},
React.createElement('h1',null,'concept of JSX and createElement() method'))
  }

export default Hello