import React from "react";
//const Friends1=({name,nickname,children})=>{
    const Friends1=props=>{  
        const {name,nickname,children}=props
    return(
        <div>
            <h1>Hello {name} a.k.a {nickname}</h1>
            {children}
        </div>
    )
}
export default Friends1 