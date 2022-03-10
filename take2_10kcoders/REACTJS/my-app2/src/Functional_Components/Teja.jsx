import React, {useState} from "react";
export const Teja=()=>{
    // UseState()//Hook
   const[myName,setmyName]=useState("Teja")
    //2 Arguments to be passed for the Hook 
    //1.Name of the variable (hook ni use cheskuni manam 
    // e variable ni create cheyali anukuntamo aa variable name)
    //2.A function name which can change the variable value
    
    return <div>
        <button onClick={()=>{setmyName("Tejdeep")}}>Change Name</button>
        <h2>Hello I Am From {myName} Component</h2>
        </div>
}