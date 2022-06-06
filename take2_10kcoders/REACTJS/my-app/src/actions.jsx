export const IncAction =(value)=>async dispatch=>{
    dispatch({
        type:"Increment",
        payload:value
    })

}
export const DecAction=()=>async dispatch=>{
    dispatch({
        type:"Decrement"
    })
}