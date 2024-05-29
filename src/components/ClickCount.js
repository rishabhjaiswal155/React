import React, { Component } from 'react'
import withCounter from './withCounter'
class ClickCount extends Component {
  render() {
    const {count,incrementCount} =this.props
    return (
      <button onClick={incrementCount}> Clicked {count} Times</button> 
       )
  }
}

export default withCounter(ClickCount)