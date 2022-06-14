import { useEffect, useState } from "react"

export const UseEffect=()=>{
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log(count)
    },[count])
    return(
        <div>
            <h2 >You Clicked {count} times</h2>
            <button onClick={()=>setCount(count+1)}>Clicked</button>
        </div>
    )
}