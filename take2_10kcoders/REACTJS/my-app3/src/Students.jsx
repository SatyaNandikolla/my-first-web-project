// rafc
import React from 'react';
export const Students=(props)=>{
        return(
        <div>
            {props.allStudents.map((students)=>{
                return <p key={students}>{students}<button onClick={()=>props.handleDelete(students)}>Delete</button></p>
                //without error we have to give the key
                // return <p key={students}>{students}</p>
            })}
          
        </div>
    )
}