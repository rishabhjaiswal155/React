import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Rishabh'
      }
      console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props,state){
        console.log(' LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentsUpdate')
        return true
    }

    

    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }

  render() {
    console.log('LifeCycleB render')
    return (
      <div>LifeCycleB</div>
    )
    
  }
}
export default LifeCycleB