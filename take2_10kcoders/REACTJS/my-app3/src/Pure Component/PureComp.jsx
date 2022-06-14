import { PureComponent } from "react";

// 
export default class PureComp extends PureComponent{
    render(){
        console.log("Pure Component")
        return(
            <div>
                <h2>Pure Component</h2>
            </div>
        )
    }
}