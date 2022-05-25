import { useState } from "react"

export const Parent1=()=>{
    // const[myname,setMyname]=useState("Parent1")
    const[myname,setMyname]=useState({
        id:529,
        fname:"Satya",
        lname:"Nandikolla",
        email:"satyanandikolla23@gmail.com"
    })
    const handleRemove=(val)=>{
        // console.log("handle Remove",val)
        var newUser={...myname}
        delete newUser[val]
        setMyname(newUser)
    }
    return(
        <div>
            {/* <button onClick={()=>{setMyname("Parent111")}}>Change Name</button> */}
            <h2>Hello I AM From Parent1 Arrow Functional Component</h2>
            {/* <ul>
                <li>{myname.id}</li>
                <li>{myname.fname}</li>
                <li>{myname.lname}</li>
                <li>{myname.email}</li>
            </ul> */}
            <ul type="none">
                {Object.keys(myname).map((val)=>{
                    return <li key={val} onClick={()=>{handleRemove(val)}}>{val}:{myname[val]}</li>
                })}
            </ul>
            {Object.keys(myname).length===0 &&
            <p>Object is completely deleted</p>}
        </div>
    )
}