import {Component} from "react";
import Hoc from "./Hoc";
class HoverCounter extends Component{
    
    render(){
        return(
            <div>
                <h2 onMouseOver={this.props.handleClick}>you Hovered {this.props.count} times</h2>
            </div>
        )
    }
}
export default Hoc(HoverCounter)