import React from "react";
import Questions from "./Questions.json";
import Display from "./Display";
import "./App.css"

function App() {
  return (
    <div> 
      <center>
      <h2>Hello From App</h2> 
      {Questions.map((question,index)=>{
        return(
        // <h2 key={question}>{question.title}</h2>
        <Display question={question}/>
        )
      })}
      </center>
    </div>
  );
}

export default App;
