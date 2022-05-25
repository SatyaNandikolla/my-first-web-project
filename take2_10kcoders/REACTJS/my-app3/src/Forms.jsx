import { useState } from "react"

export const Forms=()=>{
   const[form,setForm]=useState({
       fname:"",
       lname:""
   })
   const handleInput=(e)=>{
       let newForm={...form}
       let nameofInput=e.target.name
       newForm[nameofInput]=e.target.value
       setForm(newForm)
    //    console.log(nameofInput)
    //    console.log(e.target.value)
    //    setFname(e.target.value)
   }
   const getForm=()=>{
       console.log(form)
       clearForm()
   }
   const clearForm=()=>{
       setForm({
           fname:"",
           lname:""
       })
   }
    return(
        <div style={{width:"300px",background:"lightGray", margin:"0 auto", padding:"20px"}}>
            <form>
                <label htmlFor="fname">First Name</label>
                <input type="text" name="fname" value={form.fname} onChange={(e)=>{handleInput(e)}}/><br/>
                <label htmlFor="lname">Last Nmae</label>
                <input type="text" name="lname" value={form.lname} onChange={(e)=>{handleInput(e)}}/><br/>
                <button type="button" onClick={getForm}>Get User</button>
            </form>
        </div>
    )
}