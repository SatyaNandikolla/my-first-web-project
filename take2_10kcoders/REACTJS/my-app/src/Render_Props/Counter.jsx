import { Component } from "react";

class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        }
    }
    handleChange=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render(){
        return(
            <div>{this.props.render(this.state.count, this.handleChange)}</div>
        )
    }
}
export default Counter;

// App.js code 
// import React from "react";
// import ClickCounter1 from "./Render_Props/ClickCounter1";
// import Counter from "./Render_Props/Counter";
// import HoverCounter1 from "./Render_Props/HoverCounter1";
// import User from "./Render_Props/User";
//  function App(){
//    return(
//      <div>
//        <h2>Hello</h2>
//        <Counter render={(count,handleChange)=><ClickCounter1 count={count} handleChange={handleChange}/>}/>
//        <Counter render={(count,handleChange)=><HoverCounter1 count={count} handleChange={handleChange}/>}/>
       
//         {/* <User name="Satya"/>  */}
//        <User name={(isLoggedIn)=>isLoggedIn ?"Satya":"Gaust"}/>
//      </div>
//    )
//  }
//  export default App;