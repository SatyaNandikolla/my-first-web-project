import React from "react";

const Display=({question})=>{
    return (
        <div className="alignLeft">
           <h2 key={question}>{question.title}</h2>
        </div>
    )
}
export default Display;