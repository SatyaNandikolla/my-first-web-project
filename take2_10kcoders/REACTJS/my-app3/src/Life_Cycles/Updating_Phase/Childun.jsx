import React, { Component } from 'react'
export class Childun extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        console.log("Child Constructor")
    }
    static getDerivedStateFromProps(state,props){
        console.log("Child getDerivedStateFromProps")
        return null;
    }
    componentDidMount(){
        console.log("Child componentDidMount")
    }
    componentWillUnmount(){
        console.log("I Am Removing From Dom")
    }
    render(){
        console.log("Child Render")
        return(
            <div>ChildLifeCycle Updating</div>
        )
    }
}