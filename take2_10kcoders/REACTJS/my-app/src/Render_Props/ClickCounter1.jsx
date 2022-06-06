import { Component } from "react";

class ClickCounter1 extends Component{
    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     }
    // }
    // handleChange=()=>{
    //     this.setState({
    //         count:this.state.count+1
    //     })
    // }
    render(){
        return(
            <div>
                <button onClick={this.props.handleChange}>Change</button>
                <h2>You Clicked {this.props.count} times</h2>
            </div>
        )
    }
}
export default ClickCounter1;