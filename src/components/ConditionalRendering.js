import React, { Component } from 'react'
class ConditionalRendering extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
  render() {
    if(this.state.isLoggedIn)
        return <div>Hello and welcome Rishabh</div>
        else
        return <div>Hello and Welcome Guest</div>
    
  }
}

export default ConditionalRendering