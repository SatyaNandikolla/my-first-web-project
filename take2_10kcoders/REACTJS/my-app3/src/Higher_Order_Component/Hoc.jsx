import { Component } from "react"

const Hoc=(OriginalComponent)=>{
    class EnhancedComponent extends Component{
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
            return <OriginalComponent count={this.state.count} handleChange={this.handleChange}/>
        }
    }
    return EnhancedComponent
}
export default Hoc;