import React, { Component } from 'react'

 class ClassClick extends Component {
    ClickHandler(){
        console.log("button clicked")
    }
    render() {
       
    return (
      <div>ClassClick
        <br/>
        <button onClick={this.ClickHandler}>ClickMe</button>
      </div>
    )
  }
 }
export default ClassClick