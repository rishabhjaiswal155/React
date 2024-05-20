import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'parent'
      }
      this.GreetParent=this.GreetParent.bind(this)
     }
      GreetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
      }
    
  render() {
    return (
      <div>
        <ChildComponent GreetHandler={this.GreetParent}/>
      </div>
    )
  }

}
export default ParentComponent