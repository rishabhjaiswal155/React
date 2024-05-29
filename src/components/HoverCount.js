import React, { Component } from 'react'
import withCounter from './withCounter'
class HoverCount extends Component {
  render() {
    const {count,incrementCount}=this.props
    return (
      <h1 onMouseOver={incrementCount}>{this.props.name} Hovered {count} times</h1>
        )
  }
}

export default withCounter(HoverCount,10)