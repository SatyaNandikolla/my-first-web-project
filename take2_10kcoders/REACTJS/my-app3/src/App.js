import React from "react";
import ClickCounter1 from "./RenderProps/ClickCounter1";
import Counter from "./RenderProps/Counter";
import HoverCounter1 from "./RenderProps/HoverCounter1";
import User from "./RenderProps/User";


 function App(){
   return(
     <div>
       <h2>Hello</h2>
       
       <User render={(isLoggedIn)=>(isLoggedIn ? "Satya" : "Guest")}/>
       <Counter render={(count,handleChange)=><ClickCounter1 count={count} handleChange={handleChange}/>}/>
     <Counter render={(count,handleChange)=><HoverCounter1 count={count} handleChange={handleChange}/>}/>
     </div>
   )
 } 
 export default App;
