import { Component } from "react";

export default class N extends Component{
    // //Javascript way of displaying Html elements
    // var message="Hello I Am From N Class Component";
    // document.querySelector("h2").innerHTML=message


    //Reactjs way of displaying Html elements in class component
    constructor(){
        super()
        this.state={
            message:"Hello I Am From Class Component"
        }
    }
    render(){
        return(
            <div>
                <button onClick={()=>{this.setState({
                    message:"Hello I Am From Class Component I have Changes"
                })}}>Change Message</button>
                <h2>{this.state.message}</h2>
            </div>
            
        )
    }
}