// import { Component } from "react";
// import axios from "axios";
// class Users extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             products:[]
//         }
//     }
//     componentDidMount(){
//         let Fake_Store_Products_Url="https://fakestoreapi.com/products";
//         axios.get(Fake_Store_Products_Url).then((res)=>{
//             console.log(res.data)
//             let newState={...this.state}
//             newState['products']=res.data
//             // console.log(newState)
//             this.setState(newState)
            
//         })
//         // console.log("Component Mounted")
//     }
//     render(){
//         return(
//             <div>
//                 <h2>Hello I Am From Users Component</h2>
//                 <ul type="none">
//                     {/* {this.state.products.map((product)=>{
//                         return <li key={product}>{product.title}</li>
//                     })} */}
//                     {this.state.products.map((product)=>{
//                         // return <li>{product.title}</li>
//                         return( <li>
//                             <img src={product.image} alt=""/></li>
//                             )
//                     })}
//                 </ul>
//             </div>
//         )
//     }
// }
// export default Users;
import axios from "axios";
import {Component} from "react";
class Users extends Component{
    constructor(props){
        super(props)
        this.state={
            products:[]
        }
    }
    // componentDidMount(){
    //     let Fake_Store_Products_Url="https://fakestoreapi.com/products"
    //     axios.get(Fake_Store_Products_Url).then((res)=>{
    //         console.log(res.data)
    //         let newState={...this.state}
    //         newState['products']=res.data
    //         // console.log(newState)
    //         this.setState(newState)
    //     })
    // }
    componentDidMount(){
                let Fake_Store_Products_Url="https://fakestoreapi.com/products";
                axios.get(Fake_Store_Products_Url).then((res)=>{
                    console.log(res.data)
                    let newState={...this.state}
                    newState['products']=res.data
                    // console.log(newState)
                    this.setState(newState)
                    
                })
                // console.log("Component Mounted")
            }
    render(){
        return(
            <div>
               <h2>Hello I AM From Users Component</h2>
               <ul>
                   {this.state.products.map((product)=>{
                    //    return <li>{product.title}</li>
                    return <li>
                        <img src={product.image} alt=""/>
                    </li>
                   })}
               </ul>
            </div>
        )
    }

}
export default Users;