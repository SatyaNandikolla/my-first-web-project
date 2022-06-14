import { Component } from "react";
import React from "react";

export default class RefComponent extends Component{
    constructor(){
        super()
        this.inputRef=React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                 <input type="text" ref={this.inputRef}/>
            </div>
        )
    }
}