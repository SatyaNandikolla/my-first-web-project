import { Component } from "react";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleChange=()=>{
        this.setState({count:this.state.count+1})
    }
    render(){
        return(
            <div>
                {this.props.render(this.state.count, this.handleChange)}
            </div>
        )
    }
}
export default Counter;