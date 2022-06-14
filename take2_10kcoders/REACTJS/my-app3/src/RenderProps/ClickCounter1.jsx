import { Component } from "react";

class ClickCounter1 extends Component{
    // constructor(){
    //     super()
    //     this.state={
    //         count:0
    //     }
    // }
    // handleChange=()=>{
    //     this.setState({count:this.state.count+1})
    // }
    render(){
        return(
            <div>
                <h3>You Clicked {this.props.count} times</h3>
                <button onClick={this.props.handleChange}>Clicked</button>
            </div>
        )
    }
}
export default ClickCounter1