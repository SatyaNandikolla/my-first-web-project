import { useState } from "react"
import { Student1 } from "./Student1"

export const ClassRoom1=()=>{
    const[students,setStudents]=useState(["Satya","Sandhya","Sridevi"])
    const deleteStudent=(student)=>{
        let studentsDetails=students.filter((std)=>
        std!==student)
        setStudents(studentsDetails)
    }
    return(
        <div>
            <Student1 allStudents={students} handelDelete={deleteStudent}/>
        </div>
    )
}
