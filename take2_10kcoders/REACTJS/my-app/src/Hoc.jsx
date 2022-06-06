import {Component} from "react";
export const Hoc=(OriginalComponent)=>{
     class EnhanceComponent extends Component{
        constructor(props){
            super(props)
            this.state={
                count:0
            }
        }
        handleClick=()=>{
            this.setState({
                count:this.state.count+1
            })
    
        }
        render(){
            return <OriginalComponent count={this.state.count} handleClick={this.handleClick}/>
        }
    
    }
    return EnhanceComponent;
}
export default Hoc;
