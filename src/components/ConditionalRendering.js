import React, { Component } from 'react'
class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
  render() {
    // if(this.state.isLoggedIn)
    //     return <div>Hello and welcome Rishabh</div>
    //     else
    //     return <div>Hello and Welcome Guest</div>
    
//     let Message
//     if(this.state.isLoggedIn)
//         Message=<div>Hello and welcome Rishabh</div>
//        else
//         Message=<div>Hello and welcome Guest</div>
//         return <div>{Message}</div>

//return this.state.isLoggedIn ? <div>Hello and welcome Rishabh</div>:<div>Hello and welcome Guest</div>

return this.state.isLoggedIn && <div>Hello and welcome Rishabh</div>
}
}
export default ConditionalRendering