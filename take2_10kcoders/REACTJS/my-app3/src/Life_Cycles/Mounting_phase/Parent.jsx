import { Component } from "react";
import Child from "./Child";

export default class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        console.log("==Parent Constructor==")
    }
    static getDerivedStateFromProps(state,props){
       console.log("Parent getDerivedStateFromProps")
       return {name:"Sandhya"};
    }
    componentDidMount(){
        console.log("Parent componentDidMount")
    }
    render(){
        console.log(this.state.name)
        console.log("Parent render")
        return(
            <div>Parent Component
                <Child/>
            </div>
            
        )
    }
}