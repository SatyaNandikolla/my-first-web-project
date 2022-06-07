import React from "react";
// import Users from "./Users";
import "./App.css";
import {connect} from "react-redux";
import {IncAction} from "./actions";
import {DecAction} from "./actions"


function App({local_Variable,IncAction,DecAction}){
  return(
    <div>
      <h2>{local_Variable}</h2> 
      <button onClick={()=>IncAction(5)}>Increment</button>
      <button onClick={DecAction}>Decrement</button>
    </div>
  )
}
const mapStateToProps=state=>({
  local_Variable:state
})
export default connect(mapStateToProps,{IncAction,DecAction})(App);