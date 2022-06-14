import { Component } from "react";
import Hoc from "./Hoc";

class ClickCounter extends Component{
    // constructor(){
    //     super()
    //         this.state={
    //             count:0
    //         }
    // }
    // handleChange=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render(){
        return(
            <div>
                <h2>You Clicked {this.props.count} times</h2>
                <button onClick={this.props.handleChange}>Clicked</button>
            </div>
        )
    }
}
export default Hoc(ClickCounter)