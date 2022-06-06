// // import {Component} from "react";
// // export default class Students extends Component{
// //     constructor(props){
// //         super(props)
// //         console.log(props.message)
// //         console.log(props.welcMessage)
// //     }                                                                                                                                                                                                                                                                                                                                                                                                                                   
// //     render(){
// //         return(
// //             <div>
// //                 <h2>{this.props.message}</h2>
// //                 <h2>{this.props.welcMessage}</h2>
// //             </div>
// //         )
// //     }
// // }
// export const Student=(props)=>{

//     return(
//         <div>
//             {props.allState.map((state)=>{
//                 return <p key={state}>{state} <button onClick={()=>{props.handleDelete(state)}}>Delete</button></p>
//             })}
//             <h2>Hello I M From Student Component</h2>
//         </div>
//     )
// }

// import {Component} from "react";
// export default class Students extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             name:"Satya"
//         }
//         console.log("Child Constructor")
//     }
//     static getDerivedStateFromProps(state,props){
//         console.log("Child getDerivedStateFromProps")
//         return null;
//     }
//     componentDidMount(){
//         console.log("Child componentDidMount")
//     }
//     componentWillUnmount(){
//         console.log("I Am Removing From Dom")
//     }
// render(){
//     console.log("Child Render")
//     return(
//         <div>Child Component</div>
//     )
// }
// }
import {PureComponent } from "react";

export default class PureComp extends PureComponent{
    render(){
        console.log("PureComponent")
        return(
            <div>PureComp</div>
        )
    }
}

