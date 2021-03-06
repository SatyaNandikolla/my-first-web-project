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
                <h2>{this.props.render(this.state.count,this.handleChange)}</h2>
            </div>
        )
    }
}
export default Counter;