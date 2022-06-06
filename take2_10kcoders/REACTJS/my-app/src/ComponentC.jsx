//rafc
import { UserContext } from "./App"
export const ComponentC=()=>{
    return(
        <div>
            Context From ComponentC
            <UserContext.Consumer>
                {value=><div>{value}</div>}
            </UserContext.Consumer>
        </div>
    )
}