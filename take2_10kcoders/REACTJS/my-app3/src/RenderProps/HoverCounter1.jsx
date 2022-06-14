import { Component } from "react";

class HoverCounter1 extends Component{
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
                <h3 onMouseOver={this.props.handleChange}>you Hovered {this.props.count} times</h3>
            </div>
        )
    }
}
export default HoverCounter1;