import {Component} from "react";
import Hoc from "./Hoc";
class ClickCounter extends Component{
    
    
    render(){
        return(
            <div>
                <button onClick={this.props.handleClick}>Click Me</button>
                <h2>You Clicked {this.props.count} times</h2>
            </div>
        )
    
    }

}
export default Hoc(ClickCounter)