import React,{Component} from "react";
class Jigri extends Component{
    render(){
        return (
        <div><h1>Hey {this.props.name} a.k.a {this.props.nickname}</h1>
        <p>{this.props.children}</p>
        </div>
    )
    }
}
export default Jigri