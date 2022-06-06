import { Component } from "react";
import { Childun } from "./Childun";

export default class Parentun extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"Satya"
        }
        console.log("Parentun Constructor")
    }
    changeState=()=>{
        this.setState({
            name:"Sandhya"
        })
    }
    static getDerivedStateFromProps(state,props){
        console.log("Parentun getDerivedStateFromProps")
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("getSnapshotBeforeUpdate")
        // return false;
        return true;
    }
    getSnapshotBeforeUpdate(prevState,prevProps){
        console.log("Parentun shouldComponentUpdate")
        return "snapshot";
    }
    componentDidUpdate(prevProps,prevState,snapshot){
        console.log("Parentun componentDidUpdate")
        console.log("snapshot",snapshot)
        console.log(prevState)
    }
   
    render(){
        console.log("Parentun render")
        return(
            <div>
                Parentun Component
                <Childun/>
                {this.state.name ==="Satya" && <Childun/>}
                <button onClick={this.changeState}>{this.state.name}</button>
                {}
            </div>
        )
    }
}