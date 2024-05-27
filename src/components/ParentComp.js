import React, { Component} from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rishabh'
      }
    }

    componentDidMount(){
        setInterval((name)=>{
            this.setState({name:'Rishabh'})
        },2000)
    }
  render() {
    console.log('*********parenet Component render*************')
    return (
      <div>Parent Component
        <MemoComp name={this.state.name}/>
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp