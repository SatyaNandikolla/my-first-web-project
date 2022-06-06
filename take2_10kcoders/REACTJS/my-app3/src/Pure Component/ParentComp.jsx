import { Component } from "react"
import MemoComp from "./MemoComp"
import NormalComp from "./NormalComp"
import PureComp from "./PureComp"

export default class ParentComp extends Component{
    state={
        name:"Satya"
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({name:"Satya"})
        },2000)
    }
    render(){
        console.log("==Parent Component==")
        return(
            <div>{this.state.name}
                <h2>Parent Component</h2>
                <PureComp/>
                <NormalComp/>
                <MemoComp/>
            </div>
        )
    }
}

