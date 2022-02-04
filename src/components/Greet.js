import React from "react";
function Greet(props){
    console.log(props)
   return( <div>
   
     <h1>hello i am not done yet {props.name} a.k.a {props.realname}</h1>
    {props.children}
   </div>
   )
}


export default Greet
