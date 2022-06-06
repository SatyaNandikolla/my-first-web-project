import React from "react";
function MemoComp(){
    console.log("Memo Comp")
    return(
    <div>Memo Comp</div>
    )
}
export default React.memo(MemoComp)