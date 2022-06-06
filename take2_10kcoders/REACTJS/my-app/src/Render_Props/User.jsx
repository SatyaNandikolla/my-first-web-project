import React, { Component } from "react";

class User extends Component{
    render(){
        return(
            <div>
                User Name Is {this.props.name(true)}
            {/* User Name Is {this.props.name(false)} */}
            </div>
        )
    }
}
export default User;