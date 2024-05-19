import React,{Component} from "react";
class Jigri1 extends Component{
    render(){
        const {name,nickname,children}=this.props
        return(
            <div>
                <h1>Hey {name} a.k.a {nickname}</h1>
                {children}
            </div>

        )
    }
}

export default Jigri1