import React from 'react'
const Friends = (props) =>{
    return(
        <div>
        <h1>Hello {props.name} a.k.a {props.nickname}</h1>
        {props.children}
</div>
    )
}

export default Friends