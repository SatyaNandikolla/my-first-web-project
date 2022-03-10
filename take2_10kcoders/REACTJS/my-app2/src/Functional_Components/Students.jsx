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
    return (
        <div>
            {/* <ul>
                <li>{Students.id}</li>
                <li>{Students.email}</li>
                <li>{Students.username}</li>
                <li>{Students.password}</li>    
            </ul> */}
            <ul>
                {/* for displaying the values */}
                {/* {Object.values(Students).map((val) => {
                    return <li>{val}</li>
                })} */}



                {/* for displaying the keys */}
                {/* {Object.keys(Students).map((val) => {
                    return <li>{val}</li>
                })} */}

                {/* for displaying both the keys and values */}
                {Object.keys(Students).map((val) => {
                    return <li key={val}>{val}: {Students[val]}</li>
                })}
            </ul>
        </div>
    );
}