// // // // import {Component} from "react";
// // // // import Students from "./Student";
// // // // export default class Satya extends Component{
// // // // //     var message="Hello I AM From App Component";
// // // // //    document.querySelector("h2").innerHTML=message
// // // // constructor(){
// // // //     super()
// // // //     this.state={
// // // //         message:"Hello I AM From Satya Class Component",
// // // //         welcMessage:"Hello I AM One more Satya Component"
// // // //     }
// // // // }
// // // //     render(){
// // // //         return(
// // // //             <div>
// // // //                 {/* <h2>{this.state.message}</h2>
// // // //                 <button onClick={()=>{this.setState({
// // // //                     message:"Hello I have Changed"
// // // //                 })}}>Change Message</button> */}
// // // //                 <Students {...this.state}/>
// // // //             </div>
// // // //         )
// // // //     }
// // // // }


// // // // export const Sandhya=()=>{
// // // //     return(
// // // //         <div>
// // // //             <h2>Hello I AM From Sandhya Component</h2>
// // // //         </div>
// // // //     )
// // // // }
// // // import {useState} from 'react';

// // // export const Satya=()=>{
// // //     const[state,setstate]=useState({
// // //         id:529,
// // //         fname:"Satya",
// // //         lname:"Nandikolla",
// // //         email:"satyanandikolla23@gmail.com"
// // //     })
// // //    const handleRemove=(val)=>{
// // //        console.log("handleremove Called",val)
// // //        var newState={...state}
// // //        delete newState[val]
// // //        setstate(newState)
// // //    }
// // //     return(
// // //         <div>
// // //             {/* <ul type="none">
// // //                 <li>{state.id}</li>
// // //                 <li>{state.fname}</li>
// // //                 <li>{state.lname}</li>
// // //                 <li>{state.email}</li>
// // //             </ul> */}
// // //             <ul type="none">
// // //                 {Object.keys(state).map((val)=>{
// // //                     return <li key={val} onClick={()=>{handleRemove(val)}}>{val}:{state[val]}</li>
// // //                 })}
// // //             </ul>
// // //             {Object.keys(state).length===0 && <p>Object Completely Removed</p>}
// // //         </div>
// // //     )
// // // }
// // // import {useState} from "react";
// // // import { Student } from "./Student";
// // // export const Satya=()=>{
// // //     const[states,setState]=useState(["Satya","Sandhya","Sridevi"])
// // //     const deleteState=(state)=>{
// // //         var statesDetails=states.filter((std)=>
// // //         std!==state)
// // //         setState(statesDetails)
// // //         }
// // //         return(
// // //             <div>
// // //               <Student allState={states}  handleDelete={deleteState}/>
// // //             </div>
// // //         )
    
// // // }
// // import {useState} from 'react';
// // export const Satya=()=>{
// //     const[state,setState]=useState({
// //         fname:"",
// //         lname:"",
// //     })
// //  const handleInput=(e)=>{
// //      let newState={...state}
// //      let nameofInput=e.target.name
// //      newState[nameofInput]=e.target.value
// //      setState(newState)
     
// //      console.log(nameofInput)
// //     //  setState(e.target.value)
// //  }
// //  const getState=()=>{
// //      console.log(state)
// //      clearForm()
// //  }
// //  const clearForm=()=>{
// //      setState({
// //          fname:"",
// //          lname:""
// //      })
// //  }
// //     return(
// //         <div style={{width:"300px", background:"light-green", margin:"0 auto", padding:"20px"}}>
// //             <label htmlFor="fname">First Name</label>
// //             <input type="text" name="fname" value={state.fname} onChange={(e)=>handleInput(e)}/><br/>
// //             <label htmlFor="lname">Last Name</label>
// //             <input type="text"  name="lname" value={state.lname} onChange={(e)=>handleInput(e)}/><br/>
// //             <button type="buttono" onClick={getState}>Get User</button>
// //         </div>
// //     )
// // }
// import {Component} from 'react';
// import Students from './Student';
// export default class Satya extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name:"Satya"
//         }
//         console.log("Parent Constructor")
//     }
//     static getDerivedStateFromProps(state,props){
//         console.log("Parent getDerivedStateFromProps")
//         return {name:"Sandhya"}
//     }
//     componentDidMount(){
//         console.log("Parent componentDidMount")
//     }
// render(){
//     console.log(this.state.name)
//     console.log("Parent Render")
//     return(
//         <div>Parent Component  
//             <Students/>

//         </div>
//     )
// }
// }
// import {Component} from "react";
// import Students from "./Student";
// export default class Satya extends Component{
//     changeState=()=>{
//         this.setState(
//             {
//                 name:"Sandhya"
//             }
//         )
//     }
//     state={name:"Satya"}
//     static getDerivedStateFromProps(state,props){
//         console.log("Parent getDerivedStateFromProps")
//         return null;
//     }
//     shouldComponentUpdate(nextProps,nextState){
//         console.log("Parent shouldComponentUpdate")
//         return true;
//     }
//     getSnapshotBeforeUpdate(prevProps,prevState){
//         console.log("Parent getSnapshotBeforeUpdate")
//         return "snapshot";
//     }
//     componentDidUpdate(prevProps,prevState,snapshot){
//         console.log("Parent componentDidUpdate")
//         console.log("snapshot",snapshot)
//         console.log(prevState)
//     }
//     render(){
//         console.log(this.state.name)
//         console.log("Parent Render")
//         return(
//             <div>
//                Parent Component
//                <button onClick={this.changeState}>{this.state.name}</button>
//                {this.state.name ==="Satya" && <Students/>}
//             </div>
//         )
//     }
// // }
// import {useState} from 'react';
// import {useEffect} from 'react';
// export const Satya=()=>{
//     const[count,setCount]=useState(0)
//     useEffect(()=>console.log(count),[count])
//     return(
//         <div>
//    <p>You Clicked {count} times</p>
//    <button onClick={()=>{setCount(count+1)}}>Change Count</button>
//         </div>
//     )
// }
