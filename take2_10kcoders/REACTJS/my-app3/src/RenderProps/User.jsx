import { Component } from "react";

class User extends Component{
    render(){
        return(
            <div>
                <h2>User Name Is {this.props.render(false)}</h2>
            </div>
        )
    }
}
export default User;