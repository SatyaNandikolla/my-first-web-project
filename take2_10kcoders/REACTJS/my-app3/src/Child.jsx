import { Component } from "react";

export default class Child extends Component{
    constructor(props){
        super(props)
        console.log(props.message)
        console.log(props.message2)
    }
    render(){
        return(
            <div>
                <h2>{this.props.message}</h2>
                <h2>{this.props.message2}</h2>
            </div>
        )
    }
}