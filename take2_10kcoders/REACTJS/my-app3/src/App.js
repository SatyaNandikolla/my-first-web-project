// import React from "react";
// import {connect} from "react-redux"
// import { IncAction } from "./Redux/action";
// import { DecAction } from "./Redux/action";

// function App({local_variable,IncAction,DecAction}){
//    return(
//      <div>
//        <h2>{local_variable}</h2>
//        <button onClick={()=>IncAction(5)}>Increment</button>
//        <button onClick={DecAction}>Decrement</button>
//      </div>
//    )
//  } 
//  const mapStateToProps=state=>({
//    local_variable:state
//  })
//  export default connect(mapStateToProps,{IncAction,DecAction})(App);
import React from "react";
import ParentComp from "./Pure Component/ParentComp";
// import RefComponent from "./RefComponent";
// import { UseEffect } from "./UseEffect";
// import ClickCounter1 from "./RenderProps/ClickCounter1";
// import Counter from "./RenderProps/Counter";
// import HoverCounter1 from "./RenderProps/HoverCounter1";
// import User from "./RenderProps/User";
// import ClickCounter from "./Higher_Order_Component/ClickCounter";
// import HoverCounter from "./Higher_Order_Component/HoverCounter";
// import ParentComp from "./Pure Component/ParentComp";

function App(){
  return(
    <div>
      <h2>Hello</h2>
      {/* <ParentComp/> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
     
      {/* <User render={(isLoggedIn)=>(isLoggedIn ? "Satya" : "Gaust")}/>
      <Counter render={(count,handleChange)=><ClickCounter1 count={count} handleChange={handleChange}/>}/>
      <Counter render={(count,handleChange)=><HoverCounter1 count={count} handleChange={handleChange}/>}/> */}
   
     {/* <UseEffect/>
     <RefComponent/> */}
     <ParentComp/>
    </div>
  )
}
export default App;
