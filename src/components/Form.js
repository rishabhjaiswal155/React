import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
      this.state = {
         userName: '',
         comments: '',
         topic: 'React'
      }
    }
      HandleUserNameEvent=event=>{
        this.setState({userName: event.target.value})
      }
      HandleCommentEvent=event=>{
        this.setState({comments: event.target.value})
      }

      HandleTopicEvent=event=>{
        this.setState({topic:event.target.value})
      }

      HandleSubmitEvent=event=>{
         alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
               event.preventDefault()
      }

      
      
  render() {
    const{userName,comments,topic}=this.state
    return (
      <div><b>Form</b><br/>
      <form onSubmit={this.HandleSubmitEvent}>
        <label>UserName:</label>
        <input type='text' value={userName} onChange={this.HandleUserNameEvent}/>
        <br/><label>Comments:</label>
        <textarea value={comments} onChange={this.HandleCommentEvent}/>
        <br/>
        <label>Topics</label>
        <select value={topic} onChange={this.HandleTopicEvent}>
            <option value='React'>ReactJS</option>
            <option value='Angular'>Angular</option>
            <option value='Vue'>VueJs</option>
        </select><br/>
        <button type="submit">Submit</button>
      </form>
      </div>
    )
  }

}
export default Form