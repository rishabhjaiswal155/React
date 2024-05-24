import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rishabh'
      }
      console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log(' LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentsUpdate')
        return true
    }

    changeState =()=>{
        this.setState({name:'CodeEvolution'})
    }

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }
  render() {
    console.log('LifeCycleA render')
    return (
        <div>
      <div>LifeCycleA</div>
      <button onClick={this.changeState}>change the state</button>
      <LifeCycleB/></div>
    )
    
  }
}
export default LifeCycleA