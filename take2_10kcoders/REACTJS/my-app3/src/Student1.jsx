export const Student1=(props)=>{
    return(
        <div>
            {props.allStudents.map((student)=>{
                return <p key={student}>{student}<button onClick={()=>props.handelDelete(student)}>Delete</button></p>
    
            })}
          
        </div>
    )
}