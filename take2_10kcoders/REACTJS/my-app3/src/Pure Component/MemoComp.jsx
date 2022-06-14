// import React from "react";
// function MemoComp(){
//     console.log("Memo Component")
//     return(
//         <div>
//             <h2>Memo Component</h2>
//         </div>
//     )
// }

import { Component } from "react";

// export default React.memo(MemoComp);
export default class MemoComp extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    handleChange=()=>{
       this.setState({count:this.state.count+1})
    }
    render(){
        return(
              <div>
                  <button onClick={this.handleChange}>Clicked</button>
                  <h2>You Clicked {this.state.count} times</h2>
              </div>
        )
    }
}

