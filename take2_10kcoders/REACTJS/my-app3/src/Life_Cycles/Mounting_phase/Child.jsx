import { Component } from "react";

export default class Child extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        console.log("==Child Constructor==")
    }
    static getDerivedStateFromProps(state,props){
       console.log("Child getDerivedStateFromProps")
       return null;
    }
    componentDidMount(){
        console.log("Child componentDidMount")
    }
    render(){
        console.log("Child render")
        return(
            <div>Child Component</div>
        )
    }
}