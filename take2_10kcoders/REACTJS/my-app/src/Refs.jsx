import React,{Component} from "react";

export default class Refs extends Component{
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
    }
    render(){
        return(
            <div>
                <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
}