//rafc
// import React from "react";
// export const Students = () => {
//     return (
//         <div>
//         </div>
//     );
// }

import React, { useState } from "react";
export const Students = () => {
    const [Students, setStudent] = useState({
        "id": 529,
        "email": "Satyanandikolla32@gmail.com",
        "username": "Satya",
        "password": "Satyacse@529"
    });

    const handleRemove=(val)=>{
        console.log("HandleRemoved Called...!",val)
        let newStudents={...Students}
        // delete Students[val]
        delete newStudents[val] 
        setStudent(newStudents)

    }

    return (
        <div>
            {/* <ul>
                <li>{Students.id}</li>
                <li>{Students.email}</li>
                <li>{Students.username}</li>
                <li>{Students.password}</li>    
            </ul> */}

            {/* <ul> */}
                {/* for displaying the values */}
                {/* {Object.values(Students).map((val) => {
                    return <li>{val}</li>
                })} */}



                {/* for displaying the keys */}
                {/* {Object.keys(Students).map((val) => {
                    return <li>{val}</li>
                })} */}

                {/* for displaying both the keys and values */}
                {/* {Object.keys(Students).map((val) => {//this is in li
                    return <li key={val}>{val}: {Students[val]}</li>
                })} */}
                {/* </ul> */}

                {Object.keys(Students).map((val) => {//this is in lparagraph
                    return <p key={val} onClick={()=>{handleRemove(val)}}>{val}: {Students[val]}</p>
                })}

                {Object.keys(Students).length===0 && <p>Object is completely deleted</p>}
            
        </div>
    );
}