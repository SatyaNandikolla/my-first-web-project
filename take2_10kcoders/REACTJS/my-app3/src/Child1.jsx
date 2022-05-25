import { useState } from "react"

export const Child1=()=>{
    const[myChild,setMyChild]=useState(["Satya","Sandhya","Sridevi"])
    return(
        <div>
            {myChild.map((val)=>{
                return<p key={val}>{val}</p>
            })}

        </div>
    )
}