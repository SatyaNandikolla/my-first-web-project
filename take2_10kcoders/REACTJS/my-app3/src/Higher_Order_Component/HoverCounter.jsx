import { Component } from "react";
import Hoc from "./Hoc";

class HoverCounter extends Component{
    // constructor(){
    //   super()
    //   this.state={
    //       count:0
    //   }
    // }
    // handleChange=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render(){
        return(
            <div>
                <h2 onMouseOver={this.props.handleChange}>You Hovered {this.props.count} times</h2>
            </div>
        )
    }
}
export default Hoc(HoverCounter)