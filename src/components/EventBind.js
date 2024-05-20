import React, { Component } from 'react'
 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
       }
    //    this.ClickHandler=this.ClickHandler.bind(this)
    }
//     ClickHandler(){
//         this.setState({message:"Hii & Welcome"})
//     }
ClickHandler = () =>{
    this.setState({message: "Hii & Welcome"})
}

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.ClickHandler.bind(this)}>ClickMe</button> */}
        {/* <button onClick={()=>this.ClickHandler()}>ClickMe</button>  */}
        <button onClick={this.ClickHandler}>ClickMe</button> 
      </div>
    )
  }
}

export default EventBind