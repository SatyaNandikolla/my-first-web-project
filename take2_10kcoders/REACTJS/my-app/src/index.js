import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import {Provider} from "react-redux"



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
  document.getElementById('my-app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// App.js Stuff
// import React from "react";
// import {connect} from "react-redux";
// import {IncAction} from "./actions"
// import {DecAction} from "./actions"
// // import ClickCounter from "./ClickCounter";
// // import HoverCounter from "./HoverCounter";
// // import { ComponentC } from "./ComponentC";
// // // import Parent from "./Parent";
// // // import Refs from "./Refs";



// // export const UserContext=React.createContext()
//  function App({local_variable,IncAction,DecAction}){
 
//   return (
//     <div>
//       {/* <UserContext.Provider value={"Satya"}>
//       <ComponentC/>
//       </UserContext.Provider> */}
//       {/* <ClickCounter/>
//       <HoverCounter/> */}
//       <h2>{local_variable}</h2>
//       <button onClick={()=>IncAction(5)}>Increment</button>
//       <button onClick={DecAction}>Decrement</button>
  
 
//   </div>
//   )
// }
// const mapStateToProps=state=>({
//   local_variable:state
// }) 
// export default connect(mapStateToProps,{IncAction,DecAction})(App);
