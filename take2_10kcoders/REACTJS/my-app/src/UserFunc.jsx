// import axios from "axios";
// import React, { useEffect, useState } from "react";
// const UserFunc = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(()=>{
//         let Fake_Store_Products_Url="https://fakestoreapi.com/products"
//         axios.get(Fake_Store_Products_Url).then(({data})=>{
//             console.log(data)
//             setProducts(data)
//         })
//     },[])
//     return(
//         <div>
//             <h2>Hello I AM From UserFunc Component</h2>
//         </div>
//     )
// }
// export default UserFunc;


import axios from "axios";
import Recat,{useState,useEffect} from "react";
const UserFunc=()=>{
    const[products,setProducts]=useState([])
    useEffect(()=>{
        let Fake_Store_Products_Url="https://fakestoreapi.com/products"
        axios.get(Fake_Store_Products_Url).then(({data})=>{
            console.log(data)
            setProducts(data)
        })

    },[])
    return(
        <div>
           <h2>Hello I AM From UserFunc Component</h2>
           <ul>
               {products.map((product)=>{
                //    return <li>{product.title}</li>
                return <li>
                    <img src={product.image}/>
                    </li>
               })}
           </ul>
        </div>
    )
}
export default UserFunc;