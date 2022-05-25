import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello I Am From Parent Class Component",
            message2:"Hello I Am From Parent1 Class Component"
        }
    }
    render(){
        return(
            <div>
                <h2></h2>
                <Child {...this.state}/>
            </div>
        )
    }
}