import { Component } from "react"

const Hoc=(OriginalComp)=>{
    class EnhancedComp extends Component{
        constructor(){
            super()
                this.state={
                    count:0
                }
        }
        handleChange=()=>{
            this.setState({count:this.state.count+1})
        }
        render(){
            return <OriginalComp count={this.state.count} handleChange={this.handleChange}/> 
        }
    }
  return EnhancedComp;  
}
export default Hoc;