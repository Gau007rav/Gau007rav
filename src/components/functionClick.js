import React from "react";
function functionClick(){
    function clickHandler(){
        console.log("clicked")
    }
    return(<div>
        <button onClick={clickHandler}>clickMe</button>
    </div>)
}
export default functionClick